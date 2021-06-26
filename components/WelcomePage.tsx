import * as React from 'react';
import { Button, Div , Text } from 'react-native-magnus'

export interface WelcomePageProps {
    navigation: { replace: (destination: string) => void; }
}
 
export interface WelcomePageState {
    
}
 
class WelcomePage extends React.Component<WelcomePageProps, WelcomePageState> {
    //state = { :  }
    render() { 
        return (  
            <Div m="lg" p="xl">
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ex sit amet magna dignissim scelerisque. Nam scelerisque sem ut hendrerit vehicula. Fusce laoreet dui eu ligula vulputate gravida in et ex. Cras felis felis, elementum viverra nibh ac, cursus pellentesque neque. Suspendisse ac diam turpis. Aliquam sit amet dui volutpat, tincidunt ligula eget, elementum enim. Quisque eget lectus eleifend, aliquam massa non, placerat nisl. Integer dapibus, nisl ac tempus tempus, risus velit lobortis nisi, in laoreet mi enim non nisi. Donec a justo sed orci pellentesque lobortis et eu lacus. Aenean lobortis elit non leo volutpat, vitae ornare nisl luctus. Morbi quis finibus tortor. Nunc elementum ornare leo, sit amet rutrum justo venenatis ac. </Text>
                <Button
                    p="md" 
                    alignSelf="center" 
                    onPress={() => this.props.navigation.replace("Profiles")}
                >
                    Add Profile
                </Button>
            </Div>
        );
    }
}
 
export default WelcomePage;