import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from "react-native-storage"

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
  size: 8,
  enableCache: true,
})

export const addToContactTracingList = (state: any) => {
  ;(async () =>
    await storage.save({
      key: "profiles",
      id: String(state.healthCardNumber),
      data: state,
    }))()
}

export default storage
