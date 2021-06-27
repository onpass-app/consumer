import React from 'react'
import { Button, Icon } from "react-native-magnus"

const CloseDetailModalButton = ({ setModalVisibility }: { setModalVisibility: any }) => {
    return (
        <>
            <Button
            bg="black"
            alignItems="center"
            rounded="circle"
            onPress={() => setModalVisibility(false)}>
                <Icon 
                name="ios-close-outline"
                fontFamily="Ionicons"
                fontSize={24}
                color="white"
                />
            </Button>
        </>
    )
}

export default CloseDetailModalButton