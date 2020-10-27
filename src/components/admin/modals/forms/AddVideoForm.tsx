import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { Button, Form, Input, InputNumber, Popconfirm, Select } from "antd";
import { ValidateStatus } from "antd/lib/form/FormItem";
import { API, graphqlOperation } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import * as mutations from '../../../../graphql/mutations';
import { MoviesListItem, TvSeriesListItem } from "../../../../types/graphql";
import { listMovies, listTvSeries, loadMovieInterview, loadMovieReview, loadTvInterview, loadTvReview } from "../../../../utils/apiUtils";
import { getMetadata, getVideoId } from "../../../../utils/youtubeUtils";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const { Option } = Select


interface FormProps {
  name: string
  media: string
  path: string
  season?: number | null
  episode?: number | null
  score: number
  lengthSeconds: number
  published: string
}

interface ValidationStatus {
  status: ValidateStatus
  message: string
}

interface AddTvFormProps {
  addType: "tvInterview" | "tvReview" | "movieInterview" | "movieReview"
  id?: string
  onComplete: () => void
}

const AddVideoForm: React.FunctionComponent<AddTvFormProps> = ({ addType, onComplete, id }) => {
  const [form] = Form.useForm<FormProps>()
  const [validated, setValidated] = useState(false)
  const [validateStatus, setValidateStatus] = useState<ValidationStatus | undefined>()

  const [mediaChoices, setMediaChoices] = useState<Array<TvSeriesListItem | MoviesListItem>>([])

  let foreignKey: string
  let graphqlPath: string
  let graphqlDeletePath: string
  let showScore: boolean
  switch(addType) {
    case "tvInterview":
      foreignKey = "tvInterviewSeriesId"
      graphqlPath =  id !== undefined ? mutations.updateTvInterview : mutations.createTvInterview
      graphqlDeletePath = mutations.deleteTvInterview
      showScore = false
      break
    case "tvReview":
      foreignKey = "tvReviewSeriesId"
      graphqlPath = id !== undefined ? mutations.updateTvReview : mutations.createTvReview
      graphqlDeletePath = mutations.deleteTvReview
      showScore = true
      break
    case "movieInterview":
      foreignKey = "movieInterviewMovieId"
      graphqlPath = id !== undefined ? mutations.updateMovieInterview : mutations.createMovieInterview
      graphqlDeletePath = mutations.deleteMovieInterview
      showScore = false
        break
    case "movieReview":
      foreignKey = "movieReviewMovieId"
      graphqlPath = id !== undefined ? mutations.updateMovieReview : mutations.createMovieReview
      graphqlDeletePath = mutations.deleteMovieReview
      showScore = true
      break
  }

  const onFinish = async (values: FormProps) => {
    const newId = id !== undefined ? id : getVideoId(form.getFieldValue("path"))
    const inputCommon = {
      id: newId,
      [foreignKey]: values.media,
      name: values.name,
      lengthSeconds: values.lengthSeconds,
      path: values.path,
      published: values.published,
    }

    const input = showScore ? { ...inputCommon, score: values.score } : inputCommon
    const opts = {...graphqlOperation(graphqlPath, { input }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
    await API.graphql(opts)
    onComplete()
  }

  const handleDelete = async () => {
    const input = { id }
    const opts = {...graphqlOperation(graphqlDeletePath, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
    await API.graphql(opts)
    onComplete()
  }


  const loadEdit = useCallback(() => {
    if (id !== undefined) {
      switch(addType) {
        case "tvReview":
          loadTvReview(id).then(res => {
            const review = res.getTvReview
            if (review !== null) {
              const formData = {...review, media: review.series.id}
              form.setFieldsValue(formData)
            }
          })  
          break
        case "tvInterview":
          loadTvInterview(id).then(res => {
            const interview = res.getTvInterview
            if (interview !== null) {
              const formData = {...interview, media: interview.series.id}
              form.setFieldsValue(formData)
            }
          })
          break
        case "movieReview":
          loadMovieReview(id).then(res => {
            const review = res.getMovieReview
            if (review !== null) {
              const formData = {...review, media: review.movie.id}
              form.setFieldsValue(formData)
            }
          })
          break
        case "movieInterview":
          loadMovieInterview(id).then(res => {
            const interview = res.getMovieInterview
            if (interview !== null) {
              const formData = {...interview, media: interview.movie.id}
              form.setFieldsValue(formData)
            }
          })
          break
      }
    }
  }, [id])
  
  useEffect(() => {
    if (addType === "tvInterview" || addType === "tvReview") {
      listTvSeries().then(series => setMediaChoices(series))
    } else if (addType === "movieInterview" || addType === "movieReview") {
      listMovies().then(movies => setMediaChoices(movies))
    }
    loadEdit()

  }, [loadEdit])

  const validate = async () => {
    const videoId = getVideoId(form.getFieldValue("path"))
    if (!videoId) {
      const status: ValidationStatus = {
        status: "error",
        message: "Invalid url. Provide youtube url (e.g. https://youtu.be/SixHrR_C6FI)",
      }
      setValidateStatus(status)
      return
    }

    try {
      const meta = await getMetadata(videoId)
      form.setFieldsValue({name: meta.title})
      const lengthSeconds = Number.parseInt(meta.video_details.lengthSeconds)
      const published = meta.video_details.publishDate
      form.setFieldsValue({lengthSeconds, published})
      setValidated(true)
    } catch {
      const status: ValidationStatus = {
        status: "error",
        message: "Cannot access link. Check url is valid",
      }
      setValidateStatus(status)
      return
    }
  }

  return(
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} size="small">
        <Form.Item name="media" label="media" rules={[{ required: true }]}>
          <Select placeholder="Select media">
            {mediaChoices.map(m => (
              <Option value={m.id} key={m.id}>{m.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="path" label="url" validateStatus={validateStatus?.status} help={validateStatus?.message} rules={[{ required: true }]}>
          <Input onChange={() => {setValidated(false); setValidateStatus(undefined)}} />
        </Form.Item>
        { showScore &&
          <Form.Item name="season" label="Season" rules={[{ required: false }]}>
            <InputNumber min={1} />
          </Form.Item>
        }
        {showScore && 
          <Form.Item name="episode" label="Episode" rules={[{ required: false }]}>
            <InputNumber min={1}/>
          </Form.Item>
        }
        { showScore &&
          <Form.Item name="score" label="Score" rules={[{ required: showScore }]}>
            <InputNumber min={0} max={10} />
          </Form.Item>
        }
        <Form.Item name="lengthSeconds" label="Length (seconds)" rules={[{ required: false }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="published" label="Published" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          { id &&
              <Popconfirm
                title="Are you sure delete?"
                onConfirm={() => handleDelete()}
                okText="Delete"
                cancelText="Cancel"
              >
              <Button htmlType="button">
                Delete
              </Button>
            </Popconfirm>
          }
          <Button type="primary" onClick={() => validate()}>
            Validate
          </Button>
          <Button htmlType="button" onClick={() => {form.resetFields(); setValidated(false) }}>
            Reset
          </Button>
          <Button htmlType="submit" disabled={!validated}>
            Submit
          </Button>

        </Form.Item>
      </Form>
  )
}

export default AddVideoForm
