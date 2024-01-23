import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { YStack } from 'tamagui';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-expo';
import NewActivity from '../components/newActivity';
import { ListofActivities } from '../components/ListofActivities';

const Home = () => {
    const { user } = useUser();

    return (
        <SafeAreaView style={styles.page}>
            <YStack space="$4" style={styles.container}>
                <Text style={styles.text}>Welcome,{"\n"}
                <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>{user?.emailAddresses[0].emailAddress} 🎉</Text></Text>
                <NewActivity />
                <ListofActivities />
            </YStack>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        backgroundColor: "#fff",
        padding: 16,
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "MunroSmall", 
    },
})

export default Home;