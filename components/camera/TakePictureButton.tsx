import { Camera } from "expo-camera"
import React from "react"
import { Button, Icon, Div } from "react-native-magnus"

const TakePictureButton = ({
  setShouldTakePicture,
}: {
  setShouldTakePicture: any
}) => {
  return (
    <Div flexDir="row" justifyContent="center" mt="auto">
      <Button
        bg="black"
        p="xl"
        m="xl"
        alignItems="center"
        justifyContent="center"
        rounded="circle"
        onPress={() => setShouldTakePicture(true)}
      >
        <Icon
          name="ios-camera-outline"
          fontFamily="Ionicons"
          fontSize={32}
          color="white"
        />
      </Button>
    </Div>
  )
}

export default TakePictureButton
