import React from "react"
import { ThemeProvider } from "react-native-magnus"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ProfilesPage from "./pages/ProfilePage"
import VaccinationReceiptScanningPage from "./pages/VaccinationReceiptScanningPage"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Profiles" component={ProfilesPage} />
          <Screen
            name="VaccinationReceiptScanningPage"
            component={VaccinationReceiptScanningPage}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
