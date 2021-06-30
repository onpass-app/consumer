import React from "react"
import { Div, Text } from "react-native-magnus"
import CloseDetailModalButton from "./CloseDetailModalButton"

const DetailHeader = ({ setModalVisibility }: { setModalVisibility: any }) => {
  return (
    <Div
      justifyContent="space-between"
      flexDir="row"
      alignItems="center"
      pb={20}
      mt="xl"
    >
      <Text fontWeight="900" fontSize="5xl">
        Vaccination Details
      </Text>
      <CloseDetailModalButton setModalVisibility={setModalVisibility} />
    </Div>
  )
}

export default DetailHeader
