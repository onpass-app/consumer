import React from "react"
import { Div } from "react-native-magnus"
import OpenCameraPreviewButton from "./camera/OpenCameraPreviewButton"
import OpenDetailsModalButton from "./profile/detail/OpenDetailsModalButton"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ButtonRow = ({ identifier }: { identifier: string }) => {
  return (
    <Div flexDir="row" justifyContent="space-between" mt="auto" px={24} py={64}>
      <OpenCameraPreviewButton />
      <OpenDetailsModalButton identifier={identifier} />
    </Div>
  )
}

export default ButtonRow
