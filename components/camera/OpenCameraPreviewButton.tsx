import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import { Button, Icon } from "react-native-magnus"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const OpenCameraPreviewButton = () => {
  const { navigate } = useNavigation()

  return (
    <Button
      bg="black"
      alignItems="center"
      rounded="md"
      onPress={() => navigate("VaccinationReceiptScanningPage")}
    >
      <Icon
        name="ios-add-outline"
        fontFamily="Ionicons"
        fontSize={32}
        color="white"
      />
    </Button>
  )
}

export default OpenCameraPreviewButton
