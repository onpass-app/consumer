import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilesPage from './components/ProfilesPage';
import ProfilesPageTwo from './components/ProfilePage2';
import WelcomePage from './components/WelcomePage';
import { VaccinationReceiptScanningPage } from './components/VaccinationReceiptScanningPage';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{headerShown: false }}>
            <Stack.Screen
              name="Profiles"
              component={ProfilesPageTwo}
            />
            <Stack.Screen
              name="VaccinationReceiptScanningPage"
              component={VaccinationReceiptScanningPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    ) 
  }
}

export default App

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
