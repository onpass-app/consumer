import * as React from 'react';
import { Modal, Text } from 'react-native-magnus';

export interface ReceiptModalProps {
    
}
 
export interface ReceiptModalState {
    
}
 
class ReceiptModal extends React.Component<ReceiptModalProps, ReceiptModalState> {
    //state = { :  }
    render() { 
        return (  
            <Modal>
                <Text>This is the receipt scanning modal!</Text> 
            </Modal>
        );
    }
}
 
export default ReceiptModal;