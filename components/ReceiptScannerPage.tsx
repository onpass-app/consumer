import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Div, Text } from 'react-native-magnus'
import { Camera } from 'expo-camera';

async function parseJSON(base64Image: any) {
  try {
    let response = await fetch('', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [{
          image: {
            content: base64Image
          },
          features: [{
            type:"DOCUMENT_TEXT_DETECTION",
            maxResults: 1 
          }]
        }]
      }),
    }).then((response) => response.json()).then(data => formatResult(data.responses[0].textAnnotations[0].description))
        //console.log(data)
      } catch (err) {
        console.log("Error: Fetch was unsuccessful");
        console.log(err);
      }
}

function formatResult(description: string) {
  var lines = description.split('\n')
  var elements = Array(lines.length)
  for (var i = 0; i < lines.length; i++) {
    elements[i] = lines[i].split(":").slice(1)
  }

  let info = new Map()
  info.set('name', elements[3][0])
  info.set('number', elements[4][0])
  info.set('vaccine', elements[9][0])

  console.log("name: " + elements[3], "\nnumber: " + elements[4] + "\nvaccine: " + elements[9])

}

export default function ReceiptScannerPage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);useEffect(() => {
    (async () => {
        const { status } = await Camera.requestPermissionsAsync()
        setHasPermission(status === 'granted');
    })
  });

  if (hasPermission === false) {
    return <Text>Error: Please grant permission to use the device's camera</Text>;
  }

  return (
    <Div style={{ flex: 1 }}>
      <Camera 
        style={{ flex: 1 }} 
        type={type} 
        ref={ref => {
        setCameraRef(ref) ;
         }}>
      </Camera>
      <Div alignItems="center">
          <Button 
          alignSelf="center" 
          bg="black"
          onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync({base64: true});
              parseJSON(photo.base64.split(" ").join("+"))
            }
          }}> Take Photo
          </Button>
        </Div>
    </Div>
  );
}