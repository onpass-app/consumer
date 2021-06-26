import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilesPage from './components/ProfilesPage';
import WelcomePage from './components/WelcomePage';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomePage}
            />
            <Stack.Screen
              name="Profiles"
              component={ProfilesPage}
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
