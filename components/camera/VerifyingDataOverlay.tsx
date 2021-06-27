import React, { useState } from "react"
import { ActivityIndicator } from "react-native"
import { Overlay, Text } from "react-native-magnus"

const VerifyingDataOverlay = () => {
    const [overlay, setOverlay] = useState(false)
    return (
        <Overlay visible={overlay} p="xl">
            <ActivityIndicator />
            <Text mt="md">Verifying your vaccination receipt</Text>
        </Overlay>
    )
}

export default VerifyingDataOverlay