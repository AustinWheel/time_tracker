import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-expo';
import NewActivity from '../components/newActivity';

const Home = () => {
    const { user } = useUser();

    return (
        <SafeAreaView style={styles.page}>

        <View style={styles.container}>
            <Text style={styles.text}>Welcome,</Text>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>{user?.emailAddresses[0].emailAddress} 🎉</Text>
            <NewActivity />
        </View>
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