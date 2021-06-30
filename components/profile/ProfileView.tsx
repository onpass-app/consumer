import React from "react"
import { Div } from "react-native-magnus"
import ButtonRow from "../ButtonRow"
import ProfileHeader from "./ProfileHeader"
import ProfileQRCode from "./ProfileQRCode"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ProfileView = ({
  identifier,
  name,
  phoneNumber,
}: {
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
      <ButtonRow identifier={identifier} />
    </>
  )
}

export default ProfileView
