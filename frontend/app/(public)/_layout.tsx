import React from 'react';
import { Stack } from 'expo-router';

const PublicLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTintColor: "#fff",
                headerBackTitle: 'Back',
            }}
        >
            <Stack.Screen 
                name="login"
                options={{
                    headerTitle: "Clerk Auth App",
                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    headerBackTitle: "Create Account",
                }}
            />
            <Stack.Screen
                name="reset"
                options={{
                    headerBackTitle: "Reset Password",
                }}
            />

        </Stack>
    )
}
export default PublicLayout