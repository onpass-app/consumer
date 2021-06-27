import React, { useState } from "react"
import { ActivityIndicator } from "react-native"
import { Div, Overlay, Text } from "react-native-magnus"

const VerifyingDataOverlay = ({ visibility }: { visibility: boolean }) => {
    return (
        <Overlay visible={visibility} p="xl">
            <Div alignSelf="center" justifyContent="center">
                <ActivityIndicator />
                <Text mt="md">Verifying your vaccination receipt....</Text>
            </Div>
        </Overlay>
    )
}

export default VerifyingDataOverlay