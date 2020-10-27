import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { Button, Form, Input, Popconfirm, Image } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import * as mutations from '../../../../graphql/mutations';
import { loadMovieMedia, loadTvMedia } from "../../../../utils/apiUtils";
import { toPrimaryKey } from "../../../../utils/utils";
import ImageUpload from "./ImageUpload";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

interface FormProps {
  image: string
  name: string
}

interface AddMediaFormProps {
  addType: "movie" | "series"
  id?: string
  onComplete: () => void
}

const AddMediaForm: React.FunctionComponent<AddMediaFormProps> = ({ id, addType, onComplete }) => {
  const [form] = Form.useForm<FormProps>()
  const [currentImage, setCurrentImage] = useState<string>()
  const [imagePath, setImagePath] = useState<string>()

  let graphqlPath: string
  let graphqlDeletePath: string
  switch(addType) {
    case "movie":
      graphqlPath = id === undefined ? mutations.createMovie : mutations.updateMovie
      graphqlDeletePath = mutations.deleteMovie
      break
    case "series":
      graphqlPath = id === undefined ? mutations.createTvSeries : mutations.updateTvSeries
      graphqlDeletePath = mutations.deleteTvSeries
      break
  }

  useEffect(() => {
    form.setFields([{name: "image", value: imagePath}])
    setCurrentImage(imagePath)
  }, [imagePath])

  const loadEdit = useCallback(() => {
    if (id !== undefined) {
      if (addType === "movie") {
        loadMovieMedia(id).then(({name, image}) => {
          setCurrentImage(image)
          form.setFieldsValue({name, image})
        })
      } else if (addType === "series") {
        loadTvMedia(id).then(({name, image}) => {
          setCurrentImage(image)
          form.setFieldsValue({name, image})
        })
      }
    }
  }, [id])

  useEffect(() => {
    loadEdit()
  }, [loadEdit])

  const handleDelete = async () => {
    const input = { id }
    const opts = {...graphqlOperation(graphqlDeletePath, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
    await API.graphql(opts)
    onComplete()
  }

  const onFinish = async (values: FormProps) => {
    const newId = id || toPrimaryKey(values.name)
    const input = {
      id: newId,
      name: values.name,
      image: values.image,
    }

    const opts = {...graphqlOperation(graphqlPath, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
    await API.graphql(opts)
    onComplete()
  }
  
  return(
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} size="small">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="image" label="Image" >
        <Input disabled={true} />
      </Form.Item>
      <Form.Item name="upload" label="Upload">
        <ImageUpload onComplete={setImagePath}/>
      </Form.Item>
      <Form.Item label="Current">
        <Image src={currentImage}/>
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
        <Button htmlType="button" onClick={() => id ? loadEdit() : form.resetFields()}>
          Reset
        </Button>
        <Button htmlType="submit" >
          {id ? "Confirm" : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddMediaForm
