import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Div, Text } from 'react-native-magnus'
import { Camera } from 'expo-camera';
import TakePictureButton from './camera/TakePictureButton';
import CameraPreview from './camera/CameraPreview';
import VerifyingDataOverlay from './camera/VerifyingDataOverlay';


export const VaccinationReceiptScanningPage = (navigation: { navigate: (destination: string) => void; }) => {
  const [shouldTakePicture, setShouldTakePicture] = useState(false)
  const [overlayVisibility, setOverlayVisibility] = useState(false)

  return (
    <SafeAreaView style={{ ...StyleSheet.absoluteFillObject, flex: 1, flexDirection: "column" }}>
      <CameraPreview shouldTakePicture={shouldTakePicture} setShouldTakePicture={setShouldTakePicture} setOverlayVisibility={setOverlayVisibility} />
      <TakePictureButton setShouldTakePicture={setShouldTakePicture} />
      <VerifyingDataOverlay visibility={overlayVisibility} />
    </SafeAreaView>
  )
}

export default VaccinationReceiptScanningPage