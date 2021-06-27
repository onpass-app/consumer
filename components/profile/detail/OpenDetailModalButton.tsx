import React, { useState } from 'react';
import { Button, Icon } from "react-native-magnus"
import DetailsModal from './DetailsModal';

const OpenDetailsModalButton = ({ identifier }: { identifier: string }) => {
    const [modalVisibility, setModalVisibility] = useState(false)

    return (
        <>
            <Button
            bg="black"
            alignItems="center"
            rounded="md"
            onPress={() => setModalVisibility(true)}>
                <Icon
                name="ios-documents-outline"
                fontFamily="Ionicons"
                fontSize={32}
                color="white" />
            </Button>
            <DetailsModal
            identifier={identifier}
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility} />
        </>
    )
}

export default OpenDetailsModalButton