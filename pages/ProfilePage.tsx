import React, { useState, useEffect } from "react"
import { Div } from "react-native-magnus"
import PagerView from "react-native-pager-view"
import { View } from "react-native"
import ProfileView from "../components/profile/ProfileView"
import storage from "../services/StorageObject"
import WelcomePage from "./WelcomePage"
import { useNavigation } from "@react-navigation/native"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      storage.getAllDataForKey("profiles").then((data) => {
        if (data.length != profiles.length) setProfiles(data)
      })
    })
    return unsubscribe
  }, [navigation])

  const renderProfiles = () => {
    if (profiles.length <= 0) return <WelcomePage />

    const output = Array(0)
    for (let i = 0; i < profiles.length; i++) {
      output.push(
        <View key={String(profiles[i].healthCardNumber)}>
          <ProfileView
            navigate={navigation.navigate}
            name={profiles[i].name}
            identifier={profiles[i].healthCardNumber}
            phoneNumber={profiles[i].phoneNumber}
          />
        </View>,
      )
    }
    return output
  }

  return (
    <Div style={{ flex: 1 }} bg="white">
      <PagerView style={{ flex: 1 }} initialPage={0}>
        {renderProfiles()}
      </PagerView>
    </Div>
  )
}

export default ProfilesPage
