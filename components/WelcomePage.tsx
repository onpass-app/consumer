import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Button, Div , Text, Image, Icon } from 'react-native-magnus'
import storage from "../storage";
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/onpass-logo.png';
import WelcomeDescriptionMessage from './WelcomeDescriptionMessage';

const WelcomePage = () => {
    const navigation = useNavigation()

    const headers = [
        "Welcome to ONPass",
        "Step One",
        "Step Two",
        "Step Three"
    ]
    
    const description = [
        "Welcome to ONPass! You are only a few steps away from being able to return to (almost) normal living and attend all the events you could ever want!",
        "A few things first though, you will need to take a picture of your vaccine receipt, so ensure that you have it nearby. ONPass is a vaccine passport system which allows businesses and event coordinators to check the vaccination status of their attendees and maintain a list for contact tracing purposes.",
        "When your QR is scanned, your name, phone number, and vaccination status will be visible to the person who scanned it however all other information will remain confidential. Please ensure that you understand and consent to this before proceeding.",
        "On the next page, you will be prompted to add a profile, simply align your camera with the receipt and take a picture. The system will then verify your information and a unique QR code will be generated. Simply present the QR code at events and allow the staff to scan it. That's It! Click the button below when you are ready to proceed"
    ]

    useEffect(() => {
        async () => {
            storage.load({ key: 'profiles'}).then(response => console.log(JSON.stringify(response)))
        }
    })

        return (  
            <ScrollView>
            <Div bg="white" p="xl">
                <Image 
                alignSelf="flex-start"
                h={64}
                w={64}
                mt="xl"
                source={logo} />
                {description.map((message, index) => <WelcomeDescriptionMessage key={index} header={headers[index]} message={message} />)}
                <Button
                mt="lg"
                px="3xl"
                py="lg"
                bg="green700"
                color="white"
                suffix={<Icon name="arrowright" ml="md" color="white" />}
                justifyContent="center"
                alignSelf="center"
                onPress={() => navigation.navigate('VaccinationReceiptScanningPage')}
                >
                    Scan Your Vaccination Receipt!
                </Button>
            </Div>
            </ScrollView>
        );
    }

 
export default WelcomePage;