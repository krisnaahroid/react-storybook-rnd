import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as SuccesLottiefile from '../../assets/lottiefiles/success.json';

import { Button, View, Text } from "../../components";

const Success = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: SuccesLottiefile.default
    };
    
    return (
        <View height="100vh" direction="column" justify="center" align="center"> 
            <Lottie 
                style={{position: 'relative', top:'-50px'}}
                options={defaultOptions} 
                height={250} 
                width={250} 
            />
            <View direction="column" style={{position: 'relative', top: '-50px'}}>
                <Text align="center" size="22" isEqualSize="18" weight="regular">Thank you for your payment</Text>
                <Text align="center" size="18" isEqualSize="14" weight="light">Page will redirect to merchant at 10 seconds remaining!</Text>
            </View>
            <View width="100%" justify="center" align="center">
                <Button 
                isFocus
                variant="secondary" 
                width="15%" 
                height="50px"
                isEqualWidth="50%" 
                border="primary"
                >
                    Back to Merchant
                </Button>
            </View>
        </View>
    )
}

export default Success