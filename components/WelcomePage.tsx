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
        "Privacy & Data"
    ]
    
    const description = [
        "ONPass is a vaccine passport which allows organizations to check your vaccination status to help keep you and your fellow humans safe! You're only a few steps away from getting back to (almost) normal living!",
        "Before we get started we'll need you to do a few things first! You'll need your vaccination receipt handy and a well-lit space.",
        "Ready? Let's get started, click the green button below and take a picture of your receipt when you're ready and we'll generate a unique QR code for you embedded with your name, phone number, and vaccination status!",
        "Worried about privacy? We got you covered. All your data is stored on device and only transmitted when scanned or for one-time verification with your receipt!",
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
                mb={5}
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