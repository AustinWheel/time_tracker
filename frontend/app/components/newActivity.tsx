import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, XStack, Input } from 'tamagui';
import { green, greenA } from '../../assets/themes/colors';
import { createActivity } from '../api/activitiesApi';
import { useAuth } from '@clerk/clerk-expo';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';

const NewActivity = () => {
    const queryClient = useQueryClient();
    const { getToken } = useAuth();
    const [name, setName] = useState('');
    const addActivity = useMutation({
        mutationFn: async () => {
            const token = await getToken();
            createActivity({"name": name}, token)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['activities']});
            console.log(`New activity created: ${name}`);
            setName('');
        },

    });

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
                onPress={() => {
                    addActivity.mutate();
                }}
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
    },
    button: {
        backgroundColor: green.green6,
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
