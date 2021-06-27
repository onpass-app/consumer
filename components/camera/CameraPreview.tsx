import { Camera } from "expo-camera"
import React, { useEffect, useRef, useState } from "react"
import NoCameraPermissionMessage from "./NoCameraPermissionMessage"
import { StyleSheet } from 'react-native'
import { parseJSON, createProfileState, verifyState, saveProfileState } from "../../services/ocr"
import { useNavigation } from '@react-navigation/native'

const CameraPreview = ({ shouldTakePicture, setShouldTakePicture, setPicture }: { shouldTakePicture: boolean, setShouldTakePicture: any, setPicture: any }) => {
    const [cameraPermission, setCameraPermission] = useState();
    const camera = useRef(Camera as any)
    const navigation = useNavigation()
    
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setCameraPermission(status === "granted");
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (shouldTakePicture) {
                setShouldTakePicture(false);
                const image = await camera.current.takePictureAsync({ base64: true })
                console.log(image.uri)

                let data = await parseJSON(image.base64.split(" ").join("+"))
                let state = await createProfileState(data)
                console.log(JSON.stringify(state))
                // let phoneNumber = await verifyState(state)

                if (true) {
                    await saveProfileState(state)
                    navigation.navigate("Profiles")


                } else {
                    alert("Error: Verification Failed! Please try again.")
                }

                // .split(" ").join("+") (we don't know if base64 bug still exists...)
            }
        })()
    }, [shouldTakePicture])

    return (
        <>
            {cameraPermission ?
                <Camera 
                type="back"
                autoFocus="on"
                style={{...StyleSheet.absoluteFillObject, justifyContent: 'center' }}
                ref={reference => {
                    camera.current = reference as any
                }}
                />
            : <NoCameraPermissionMessage />
            }
        </>
    )
}

export default CameraPreview