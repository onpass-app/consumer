import * as React from "react"
import { Button, Icon } from "react-native-magnus"

const OpenCameraPreviewButton = ({ navigate }: { navigate: any }) => {
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
