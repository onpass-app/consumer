import React from "react"
import { Div, Text } from "react-native-magnus"

const ProfileHeader = ({ name }: { name: string }) => {
  return (
    <Div
      bg="black"
      h={64}
      px={24}
      py={4}
      justifyContent="center"
      alignSelf="flex-start"
      rounded="2xl"
    >
      <Text color="white" fontWeight="900" fontSize="3xl">
        {name.substring(0, name.indexOf(" "))}
      </Text>
    </Div>
  )
}

export default ProfileHeader
