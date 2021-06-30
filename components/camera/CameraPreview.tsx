import { Camera } from "expo-camera"
import React, { useEffect, useRef, useState } from "react"
import NoCameraPermissionMessage from "./NoCameraPermissionMessage"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import {
  getParsedVaccinationReceipt,
  isParsedVaccinationReceiptValid,
} from "../../services/CameraPreviewFunctions"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CameraPreview = ({
  shouldTakePicture,
  setShouldTakePicture,
  setOverlayVisibility,
}: {
  shouldTakePicture: boolean
  setShouldTakePicture: (value: boolean) => void
  setOverlayVisibility: (value: boolean) => void
}) => {
  const [cameraPermission, setCameraPermission] = useState<boolean>()
  const camera = useRef<Camera>()
  const { navigate } = useNavigation()

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setCameraPermission(status === "granted")
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (shouldTakePicture) {
        setShouldTakePicture(false)
        const image = await camera.current?.takePictureAsync({ base64: true })
        setOverlayVisibility(true)

        if (
          await isParsedVaccinationReceiptValid(
            await getParsedVaccinationReceipt(
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              image!.base64!.split(" ").join("+"),
            ),
          )
        ) {
          setOverlayVisibility(false)
          navigate("Profiles")
        } else {
          setOverlayVisibility(false)
          alert("Error: Verification Failed! Please try again.")
        }
      }
    })()
  }, [shouldTakePicture])

  return (
    <>
      {cameraPermission ? (
        <Camera
          type="back"
          autoFocus="on"
          style={{ ...StyleSheet.absoluteFillObject, justifyContent: "center" }}
          ref={(reference) => {
            camera.current = reference as Camera
          }}
        />
      ) : (
        <NoCameraPermissionMessage />
      )}
    </>
  )
}

export default CameraPreview
