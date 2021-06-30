import React, { useState } from "react"
import { Button, Div, Icon } from "react-native-magnus"
import DetailsModal from "./DetailsModal"

const OpenDetailsModalButton = ({ identifier }: { identifier: string }) => {
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <>
      <Button
        bg="black"
        alignItems="center"
        justifyContent="center"
        rounded="md"
        onPress={() => setModalVisibility(true)}
      >
        <Icon
          name="ios-document-outline"
          fontFamily="Ionicons"
          fontSize={32}
          color="white"
        />
      </Button>
      <DetailsModal
        identifier={identifier}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </>
  )
}

export default OpenDetailsModalButton
