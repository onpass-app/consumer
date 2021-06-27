import React from "react"
import { Div } from "react-native-magnus"
import OpenCameraPreviewButton from "./camera/OpenCameraPreviewButton"
import OpenDetailsModalButton from "./profile/detail/OpenDetailsModalButton"

const ButtonRow = ({ identifier, navigate }: { identifier: string, navigate: any }) => {
    return (
        <Div
        flexDir="row"
        justifyContent="space-between"
        mt="auto"
        px={24} py={64}>
            <OpenCameraPreviewButton navigate={navigate} />
            <OpenDetailsModalButton identifier={identifier} />
        </Div>
    )
}

export default ButtonRow