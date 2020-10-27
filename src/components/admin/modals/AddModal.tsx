import { Divider, Select } from "antd"
import Modal from "antd/lib/modal/Modal"
import React, { useState } from "react"
import AddMediaForm from "./forms/AddMediaForm"
import AddVideoForm from "./forms/AddVideoForm"

const { Option } = Select

export interface EditProps {id: string, type: AddType}

interface AddModalProps {
  onClose: () => void
  edit?: EditProps
}

export type AddType = "series" | "tvReview" | "tvInterview" | "movie" | "movieReview" | "movieInterview"

const AddModal: React.FunctionComponent<AddModalProps> = ({ onClose, edit }) => {
  const [addType, setAddType] = useState<AddType | undefined>(edit?.type)
  let formElem: JSX.Element = <div></div>
  switch (addType) {
    case "movieInterview":
    case "movieReview":
    case "tvInterview":
    case "tvReview":
      formElem = <AddVideoForm addType={addType} onComplete={onClose} id={edit?.id}/>
      break
    case "movie":
    case "series":
      formElem = <AddMediaForm addType={addType} onComplete={onClose} id={edit?.id}/>
      break
  }

  return(
    <Modal visible={true} onCancel={onClose} title={edit ? "Edit" : "Add"} footer={null} keyboard={false}>
      { edit === undefined &&
        <React.Fragment>
          <Select value={addType} onChange={setAddType} style={{width: "100%"}}>
            <Option value="series">Tv Series</Option>
            <Option value="tvReview">Tv Review</Option>
            <Option value="tvInterview">Tv Interview</Option>
            <Option value="movie">Movie</Option>
            <Option value="movieReview">Movie Review</Option>
            <Option value="movieInterview">Move Interview</Option>
          </Select>
        <Divider />
      </React.Fragment>}
      {formElem}
    </Modal>
  )
}

export default AddModal
