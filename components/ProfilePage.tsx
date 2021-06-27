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
        "Hey! You are only a few steps away from being able to return to (almost) normal living and attend all the events you could ever want!",
        "A few things first though, you'll need to take a picture of your vaccination receipt, so go grab it! ONPass is a vaccine passport system which allows businesses and event coordinators to check the vaccination status of their attendees and maintain a list for contact tracing purposes.",
        "When your QR is scanned, your name, phone number, and vaccination status will be visible to the person who scanned it however all other information will remain confidential. Please ensure that you understand and consent to this before proceeding.",
    ]

    useEffect(() => {
        // storage.clearMapForKey('profiles')
        const unsubscribe = navigation.addListener('focus', () => {
            storage.getAllDataForKey('profiles')
            .then(data => {
                if (data.length != profiles.length) {
                    setProfiles(data)
                }
            })
        })
        return unsubscribe;
    }, [navigation])

    const renderProfiles = () => {
        if (profiles.length <= 0) return <WelcomePage/>
            
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
                <PagerView style={{ flex: 1 }} initialPage={0}>
                    {renderProfiles()}
                </PagerView>
            </Div>
        );
}

 
export default ProfilesPage