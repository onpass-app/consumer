import React from "react"
import { Modal } from "react-native-magnus"
import DetailHeader from "./DetailHeader"
import DetailsList from "./DetailsList"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DetailsModal = ({
  identifier,
  modalVisibility,
  setModalVisibility,
}: {
  identifier: string
  modalVisibility: boolean
  setModalVisibility: (value: boolean) => void
}) => {
  return (
    <Modal isVisible={modalVisibility} pl={20} pr={20}>
      <DetailHeader setModalVisibility={setModalVisibility} />
      <DetailsList identifier={identifier} />
    </Modal>
  )
}

export default DetailsModal
