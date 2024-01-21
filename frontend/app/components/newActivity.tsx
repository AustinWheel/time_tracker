import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button, XStack, Input } from 'tamagui';
import { Activity, Airplay } from '@tamagui/lucide-icons'
import { green, greenA } from '../../assets/themes/colors';

const NewActivity = (props) => {
    const [name, setName] = useState('');

    const handleCreateActivity = () => {
        console.log(`New activity created: ${name}`);
    };

    const isDisabled = name.trim() === '';

    return (
        <XStack style={styles.container} space="$3">
            <Input
                style={styles.input}
                flex={1}
                size="$4"
                placeholder="Create new activity"
                value={name}
                onChangeText={setName}
            />
            <Button
                size="$4"
                onPress={handleCreateActivity}
                disabled={isDisabled}
                style={[styles.button]}
            >
                <Text style={styles.buttonText}>
                    +                    
                </Text>
            </Button>
        </XStack>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 5,
    },
    button: {
        backgroundColor: green.green6,
    },
    buttonDisabled: {
        backgroundColor: '#D4E9B7',
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "900",
        color: greenA.greenA12,

    },
    input: {
        backgroundColor: "#fff",
        color: green.green12,
        borderBottomColor: green.green12,
        fontSize: 20,
        fontFamily: "MunroSmall",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingLeft: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 1,
    },
});

export default NewActivity;
