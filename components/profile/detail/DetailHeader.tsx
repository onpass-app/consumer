import React from "react"
import { Div, Text } from "react-native-magnus"
import CloseDetailModalButton from "./CloseDetailModalButton"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DetailHeader = ({
  setModalVisibility,
}: {
  setModalVisibility: (value: boolean) => void
}) => {
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
