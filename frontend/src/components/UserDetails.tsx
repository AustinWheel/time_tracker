import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, ListItem, YGroup, Separator } from 'tamagui';
import { BrainCircuit, BrainCog, Mail, Phone } from '@tamagui/lucide-icons';
import { useUser } from '@clerk/clerk-expo';

export const UserDetails = () => {
    const { user } = useUser();
    const [lastName, setLastName] = useState(String(user.lastName) === "null" ? "null ;(" : String(user.lastName));
    const [firstName, setFirstName] = useState((String(user.firstName) === "null" ? "null ;(" : String(user.firstName)));
    const [phone, setPhone] = useState(String(user.primaryPhoneNumber) === "null" ? "null ;(" : String(user.primaryPhoneNumber));
    const [email, setEmail] = useState(String(user.primaryEmailAddress));
    return (
        <>
        <View
            style={styles.sideContainer}
        >
            <View paddingBottom="$2.5">
                <Text style={{ textAlign: 'left', fontSize: 20}}>
                    Personal Information
                </Text>
            </View>
        </View>
        <YGroup alignSelf="center" bordered width="100%" size="$5" >
            <YGroup.Item>
                <ListItem hoverTheme icon={BrainCog} style={{...styles.text, color:"gray"}}>
                    <Text style={styles.leftText}>
                        First Name
                    </Text>
                    <Text style={styles.rightText}>
                        {firstName}
                    </Text>
                </ListItem>
            </YGroup.Item>
            <Separator />
            <YGroup.Item>
                <ListItem hoverTheme icon={BrainCircuit} style={{...styles.text, color:"gray"}}>
                <Text style={styles.leftText}>
                        Last Name
                    </Text>
                    <Text style={styles.rightText}>
                        {lastName}
                    </Text>
                </ListItem>
            </YGroup.Item>
            <Separator />
            <YGroup.Item>
                <ListItem hoverTheme icon={Mail} style={{...styles.text, color:"gray"}}>
                <Text style={styles.leftText}>
                        Email
                    </Text>
                    <Text style={styles.rightText}>
                        {email}
                    </Text>
                </ListItem>
            </YGroup.Item>
            <Separator />
            <YGroup.Item>
                <ListItem hoverTheme icon={Phone} style={{...styles.text, color:"gray"}}>
                <Text style={styles.leftText}>
                        Phone
                    </Text>
                    <Text style={styles.rightText}>
                        {phone}
                    </Text>
                </ListItem>
            </YGroup.Item>
        </YGroup>
        </>
    )
}

const styles = StyleSheet.create({
    sideContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    button: {
      width: "auto",
      height: "auto",
      backgroundColor: "#fff",
    },
    listItem: {
        justifyContent: 'space-between',
        width: '100%',
    },
    leftText: {
        flex:1,
        fontSize: 18,
        alignSelf: "flex-start",
        verticalAlign: "middle",
        color: "gray",
    },
    rightText: {
        fontSize: 18,
        alignSelf: "flex-end",
        verticalAlign: "middle",
    },
    text: {
        fontFamily: 'MunroSmall',
        fontSize: 20,
    },
  });