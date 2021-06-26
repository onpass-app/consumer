import * as React from 'react';
import { Button, Div , Text } from 'react-native-magnus'
import PagerView from 'react-native-pager-view'
import Profile from './Profile';
import {StyleSheet, View} from 'react-native'

export interface ProfilesPageProps {
    navigation: { navigate: (destination: string) => void; }
}
 
export interface ProfilesPageState {
    
}
 
class ProfilesPage extends React.Component<ProfilesPageProps, ProfilesPageState> {
    //state = { :  }
    /*render() { 
        return (  
            <Div m="lg" p="xl">
                <PagerView initialPage={0}>
                    <Div> 
                        <Profile
                            name="John Doe"
                            email="john@gmail.com"
                            healthCardNo="1234"
                            vaccineType="pfizer"
                            vaccineDoses={2}
                        />
                    </Div>
                    <Div>
                       <Profile
                            name="Jane Doe"
                            email="jane@email.com"
                            healthCardNo="4567"
                            vaccineType="astrazeneca"
                            vaccineDoses={2}
                        />
                    </Div>
                    <Div>
                        <Profile
                            name="Jimmy Doe"
                            email="jimmy@yahoo.ca"
                            healthCardNo="6789"
                            vaccineType="moderna"
                            vaccineDoses={1}
                        />
                    </Div>
                </PagerView>
            </Div>
        );
    }*/
    render() {
        return (
            <Div style={{ flex: 1 }}>
            <PagerView style={{flex: 1}} initialPage={0}>
            <View key="1">
                <Profile
                    name="John Doe"
                    number="(905)000-0000"
                    healthCardNo="1234"
                    vaccineType="moderna"
                    vaccineDoses={2}
                />
            </View>
            <View key="2">
            <Profile
                    name="Jane Doe"
                    number="(905)000-0000"
                    healthCardNo="4567"
                    vaccineType="astrazeneca"
                    vaccineDoses={1}
                />
            </View>
            <View  key="3">
            <Profile
                    name="Timmy Doe"
                    number="(905)000-0000"
                    healthCardNo="6789"
                    vaccineType="pfizer"
                    vaccineDoses={2}
                />
            </View>
            </PagerView>
            <Button
                    p="xl"
                    m="lg" 
                    alignSelf="flex-end"
                    rounded="circle" 
                    onPress={() => this.props.navigation.navigate("ReceiptScanner")}
                >
                    +
            </Button>
        </Div>
        );
    };
}

const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
 
export default ProfilesPage;