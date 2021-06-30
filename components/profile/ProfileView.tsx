import React from "react"
import { SafeAreaView } from "react-native"
import { Div, Text } from "react-native-magnus"
import ButtonRow from "../ButtonRow"
import ProfileHeader from "./ProfileHeader"
import ProfileQRCode from "./ProfileQRCode"

const ProfileView = ({
  navigate,
  identifier,
  name,
  phoneNumber,
}: {
  navigate: any
  identifier: string
  name: string
  phoneNumber: string
}) => {
  return (
    <>
      <Div px={24} py={64}>
        <ProfileHeader name={name} />
      </Div>
      <Div flex={1} justifyContent="center">
        <ProfileQRCode name={name} phoneNumber={phoneNumber} />
      </Div>
      <ButtonRow identifier={identifier} navigate={navigate} />
    </>
  )
}

export default ProfileView
