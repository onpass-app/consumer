import React from "react"
import { Div, Icon, Text } from "react-native-magnus"

const NoCameraPermissionMessage = () => {
    return (
        <Div
        justifyContent="center"
        alignItems="center">
            <Icon fontFamily="Ionicons"
            name="camera-outline"
            fontSize={72}
            color="gray500" />
            <Text
            fontWeight="500"
            pt={10}
            fontSize={24}>Uh oh! Permission to use the camera is required for this app to work!</Text>
        </Div>
    )
}

export default NoCameraPermissionMessage