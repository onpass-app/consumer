import React from "react"
import { Div, Text } from "react-native-magnus"

const WelcomeDescriptionMessage = ({ header, message }: { header: string, message: string }) => {

    return (
        <Div
        bg="black"
        mt="md"
        rounded="md"
        mb={5}>
            <Div
            p={10}>
                <Text
                fontWeight="900"
                fontSize="xl"
                color="white">
                    {header.toUpperCase()}
                </Text>
                <Text
                pr={20}
                color="white"
                fontSize="xl">
                    {message}
                </Text>
            </Div>
        </Div>
    )
}

export default WelcomeDescriptionMessage