import { Camera } from "expo-camera"
import React, { useEffect, useRef, useState } from "react"
import NoCameraPermissionMessage from "./NoCameraPermissionMessage"
import { StyleSheet } from "react-native"
import {
  parseJSON,
  createProfileState,
  verifyState,
  saveProfileState,
} from "../../services/ocr"
import { useNavigation } from "@react-navigation/native"

const CameraPreview = ({
  shouldTakePicture,
  setShouldTakePicture,
  setOverlayVisibility,
}: {
  shouldTakePicture: boolean
  setShouldTakePicture: any
  setOverlayVisibility: any
}) => {
  const [cameraPermission, setCameraPermission] = useState()
  const camera = useRef(Camera as any)
  const navigation = useNavigation()

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
        const image = await camera.current.takePictureAsync({ base64: true })
        console.log(image.uri)
        setOverlayVisibility(true)
        let data = await parseJSON(image.base64.split(" ").join("+"))
        let state = await createProfileState(data)
        console.log(JSON.stringify(state))
        let phoneNumber = await verifyState(state)

        if (phoneNumber != null) {
          state.phoneNumber = phoneNumber
          await saveProfileState(state)
          setOverlayVisibility(false)
          navigation.replace("Profiles")
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
            camera.current = reference as any
          }}
        />
      ) : (
        <NoCameraPermissionMessage />
      )}
    </>
  )
}

export default CameraPreview
