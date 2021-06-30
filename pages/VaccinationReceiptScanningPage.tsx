import React, { useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import TakePictureButton from "../components/camera/TakePictureButton"
import CameraPreview from "../components/camera/CameraPreview"
import VerifyingDataOverlay from "../components/camera/VerifyingDataOverlay"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const VaccinationReceiptScanningPage = () => {
  const [shouldTakePicture, setShouldTakePicture] = useState(false)
  const [overlayVisibility, setOverlayVisibility] = useState(false)

  return (
    <SafeAreaView
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <CameraPreview
        shouldTakePicture={shouldTakePicture}
        setShouldTakePicture={setShouldTakePicture}
        setOverlayVisibility={setOverlayVisibility}
      />
      <TakePictureButton setShouldTakePicture={setShouldTakePicture} />
      <VerifyingDataOverlay visibility={overlayVisibility} />
    </SafeAreaView>
  )
}

export default VaccinationReceiptScanningPage
