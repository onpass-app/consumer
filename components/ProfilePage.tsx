import React, { useState, useEffect } from 'react';
import { Div , Text, Button, Image } from 'react-native-magnus'
import PagerView from 'react-native-pager-view'
import {  ScrollView, View } from 'react-native'
import ProfileView from './profile/ProfileView';
import storage from '../storage';
import WelcomePage from './WelcomePage';
import { useNavigation } from '@react-navigation/native';

const ProfilesPage = () => {
    const [profiles, setProfiles] = useState([])
    const navigation = useNavigation()

    const description = [
        "Welcome to ONPass! You are only a few steps away from being able to return to (almost) normal living and attend all the events you could ever want!",
        "A few things first though, you will need to take a picture of your vaccine receipt, so ensure that you have it nearby. ONPass is a vaccine passport system which allows businesses and event coordinators to check the vaccination status of their attendees and maintain a list for contact tracing purposes.",
        "When your QR is scanned, your name, phone number, and vaccination status will be visible to the person who scanned it however all other information will remain confidential. Please ensure that you understand and consent to this before proceeding.",
    ]

    useEffect(() => {
        (async () => {
            if ((await storage.getAllDataForKey('shouldUpdateProfiles'))[0]) {
                setProfiles(await storage.getAllDataForKey('profiles'))
            }
            setProfiles(await storage.getAllDataForKey('shouldUpdateProfiles'))
        })()
    }, [])

    const renderProfiles = () => {
        var output = Array(0)
        for (var i = 0; i < profiles.length; i++) {
            output.push(
                <View key={String(profiles[i].healthCardNumber)}>
                    <ProfileView navigate={navigation.navigate} name={profiles[i].name} identifier={profiles[i].healthCardNumber} phoneNumber={profiles[i].phoneNumber} />
                </View>
            )
        }
        return output
    }

        return (
            <Div style={{ flex: 1 }} bg="white">
                {profiles.length > 0 ?
                <PagerView style={{ flex: 1 }} initialPage={0}>
                    {renderProfiles()}
                </PagerView>
                :
                <WelcomePage/>}
            </Div>
        );o
}

 
export default ProfilesPage