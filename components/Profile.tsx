import * as React from 'react';
import { Div , Text } from 'react-native-magnus';
import QRCode from 'react-native-qrcode-svg';

export interface ProfileProps {
    name: string
    email: string
    healthCardNo: string
    vaccineType: string
    vaccineDoses: number
}
 
export interface ProfileState {
    name: string
    email: string
    healthCardNo: string
    vaccineType: string
    vaccineDoses: number
    
}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
    state = {
        name: this.props.name,
        email: this.props.email,
        healthCardNo: this.props.healthCardNo,
        vaccineType: this.props.vaccineType,
        vaccineDoses: this.props.vaccineDoses 
      }
    render() { 
        return (
            <Div m="lg" p="lg">
                <QRCode
                value={JSON.stringify(this.state)}
                />
                <Text p="md">Name: {this.state.name}</Text>
                <Text p="md">Email: {this.state.email}</Text>
                <Text p="md">Health Card No.: {this.state.healthCardNo}</Text>
                <Text p="md">Vaccine Type: {this.state.name}</Text>
                <Text p="md">Vaccine Doses: {this.state.vaccineDoses}</Text>
            </Div>
          );
    }
}
 
export default Profile;