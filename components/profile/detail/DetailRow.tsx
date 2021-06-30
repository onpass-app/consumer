import React from "react"
import { Div, Text } from "react-native-magnus"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DetailRow = ({ display, value }: { display: string; value: string }) => {
  const toProperCase = (data: string) => {
    data = data.charAt(0).toUpperCase() + data.slice(1)
    return data.replace(/([a-z])([A-Z])/g, "$1 $2").trim() + ":"
  }

  return (
    <Div bg="black" mt="md" rounded="xl" h={48} mb={5}>
      <Div pt={10} justifyContent="space-between" flexDir="row">
        <Text
          pl={20}
          color="white"
          fontWeight="500"
          fontSize="md"
          textAlignVertical="top"
          lineHeight={25}
        >
          {toProperCase(display)}
        </Text>
        <Text
          pr={20}
          color="white"
          fontWeight="400"
          fontSize="sm"
          textAlignVertical="top"
          lineHeight={25}
        >
          {value}
        </Text>
      </Div>
    </Div>
  )
}

export default DetailRow
