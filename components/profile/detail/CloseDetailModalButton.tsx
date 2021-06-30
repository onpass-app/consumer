import React from "react"
import { Button, Icon } from "react-native-magnus"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CloseDetailModalButton = ({
  setModalVisibility,
}: {
  setModalVisibility: (value: boolean) => void
}) => {
  return (
    <>
      <Button
        bg="black"
        alignItems="center"
        rounded="circle"
        onPress={() => setModalVisibility(false)}
      >
        <Icon
          name="ios-close-outline"
          fontFamily="Ionicons"
          fontSize={24}
          color="white"
        />
      </Button>
    </>
  )
}

export default CloseDetailModalButton
