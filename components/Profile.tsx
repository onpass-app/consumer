import * as React from 'react';
import { Div , Text, Button, Modal } from 'react-native-magnus';
import QRCode from 'react-native-qrcode-svg';

export interface ProfileProps {
    name: string
    number: string
    healthCardNo: string
    vaccineType: string
    vaccineDoses: number
}
 
export interface ProfileState {
    name: string
    number: string
    healthCardNo: string
    vaccineType: string
    vaccineDoses: number
    profileVisible: boolean
    
}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
    state = {
        name: this.props.name,
        number: this.props.number,
        healthCardNo: this.props.healthCardNo,
        vaccineType: this.props.vaccineType,
        vaccineDoses: this.props.vaccineDoses, 
        profileVisible: false,
      }
    render() { 
        return (
            <Div m="lg" p="lg" alignItems="center" justifyContent="center">
                <Text fontSize="3xl" fontWeight="bold">{this.state.name}</Text>
                <Div bg="black" p="lg" m="lg" rounded="xl">
                    <QRCode size={200}
                        value={JSON.stringify(this.state)}
                    />
                </Div> 
                <Modal isVisible={this.state.profileVisible}>
                    <Text p="md">Name: {this.state.name}</Text>
                    <Text p="md">Phone No.: {this.state.number}</Text>
                    <Text p="md">Health Card No.: {this.state.healthCardNo}</Text>
                    <Text p="md">Vaccine Type: {this.state.name}</Text>
                    <Text p="md">Vaccine Doses: {this.state.vaccineDoses}</Text>
                <Button
                    onPress={() => this.setState({profileVisible: !this.state.profileVisible})}
                >
                    Exit Profile
                </Button>
                </Modal>
                <Button
                    alignSelf="center"
                    bg="black"
                    onPress={() => this.setState({profileVisible: !this.state.profileVisible})}
                >
                    Show Profile
                </Button>
            </Div>
          );
    }
}
 
export default Profile;