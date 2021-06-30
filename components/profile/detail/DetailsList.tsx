import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { FlatList } from "react-native"
import storage from "../../../storage"
import DetailRow from "./DetailRow"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DetailsList = ({ identifier }: { identifier: string }) => {
  const [details, setDetails] = useState([])
  useEffect(() => {
    ;(async () => {
      const data = await storage.getBatchDataWithIds({
        key: "profiles",
        ids: [identifier],
      })
      setDetails(Object.entries(data[0]))
    })()
  }, [])

  return (
    <FlatList
      data={details}
      keyExtractor={(_, index) => `detail-${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <DetailRow display={item[0]} value={item[1]} />}
    />
  )
}

export default DetailsList

/*
 */
