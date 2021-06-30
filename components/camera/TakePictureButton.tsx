import React from "react"
import { Button, Icon, Div } from "react-native-magnus"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TakePictureButton = ({
  setShouldTakePicture,
}: {
  setShouldTakePicture: (value: boolean) => void
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
