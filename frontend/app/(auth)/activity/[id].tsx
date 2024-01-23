import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler';
import { Alert, StyleSheet } from 'react-native';
import { View, YStack } from 'tamagui';
import { router, Stack } from 'expo-router';
import React from 'react';
import Animated, {FadeOutLeft, FadeIn, FadeOut, FadeOutRight} from 'react-native-reanimated';


export default function Page() {
    const { id } = useLocalSearchParams();

    return (
        <FlingGestureHandler
            direction={Directions.RIGHT}
            onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE && router.canGoBack()) {
                    router.back();
                }}
            }
            
        >
            <Animated.View
            entering={FadeIn}
            exiting={FadeOutLeft}
            style={{ flex: 1, backgroundColor: "#fff" }}

            >

            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Stack.Screen
                    options={{
                        title: "Activity.name",
                    }}
                />
                <YStack space="$4" style={styles.container}>
                    <Text>Blog post: {id}</Text>
                </YStack>
            </View>
            </Animated.View>
        </FlingGestureHandler>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "MunroSmall", 
    },
})