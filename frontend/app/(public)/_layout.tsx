import React from 'react';
import { Stack } from 'expo-router';

const PublicLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTintColor: "#000",
                headerBackTitle: 'Back',
            }}
        >
            <Stack.Screen 
                name="login"
                options={{
                    headerTitle: "Time Tracker",
                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    headerBackTitle: "",
                    headerTitle: "",
                }}
            />
            <Stack.Screen
                name="reset"
                options={{
                    headerBackTitle: "",
                    headerTitle: "",
                }}
            />

        </Stack>
    )
}
export default PublicLayout