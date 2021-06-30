import React from "react"
import { Div } from "react-native-magnus"
import QRCode from "react-native-qrcode-svg"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ProfileQRCode = ({
  name,
  phoneNumber,
}: {
  name: string
  phoneNumber: string
}) => {
  return (
    <Div alignItems="center" rounded="xl" mb={40}>
      <QRCode
        size={256}
        value={JSON.stringify({ name: name, phoneNumber: phoneNumber })}
      />
    </Div>
  )
}

export default ProfileQRCode
