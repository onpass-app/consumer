import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Div, Text } from 'react-native-magnus'
import { Camera } from 'expo-camera';
import TakePictureButton from './camera/TakePictureButton';
import CameraPreview from './camera/CameraPreview';


export const VaccinationReceiptScanningPage = (navigation: { navigate: (destination: string) => void; }) => {
  const [shouldTakePicture, setShouldTakePicture] = useState(false)
  const [picture, setPicture] = useState(null)

  return (
    <SafeAreaView style={{ ...StyleSheet.absoluteFillObject, flex: 1, flexDirection: "column" }}>
      <CameraPreview shouldTakePicture={shouldTakePicture} setShouldTakePicture={setShouldTakePicture} setPicture={setPicture} />
      <TakePictureButton setShouldTakePicture={setShouldTakePicture} />
    </SafeAreaView>
  )
}

export default VaccinationReceiptScanningPage