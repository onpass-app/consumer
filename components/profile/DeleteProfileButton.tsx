import React, { useState } from 'react';
import { Button, Icon } from "react-native-magnus"

const DeleteProfileButton = ({ identifier }: { identifier: string }) => {
    return (
        <>
            <Button
            bg="black"
            alignItems="center"
            rounded="md"
            onPress={() => {
                //TODO: Call storage and remove profile.
            }}>
                <Icon
                name="ios-trash-outline"
                fontFamily="Ionicons"
                fontSize={32}
                color="white" />
            </Button>
        </>
    )
}

export default DeleteProfileButton