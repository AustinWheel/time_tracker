import React from "react"
import { Text, Avatar } from 'tamagui';
import { useUser } from '@clerk/clerk-react';
import { green } from "../../assets/themes/colors";

export const ProfileHeader = () => {
    const { user } = useUser();
    const date = user.createdAt.toDateString().split(' ');
    return (
        <>
            <Avatar circular size="$10">
                <Avatar.Image source={{ uri: user.imageUrl }} />
            </Avatar>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
                {user.firstName} {user.lastName}!
            </Text>
            <Text style={{ textAlign: 'center', color:green.green10, fontSize: 20 }}>
                Active since -
                <Text>
                {" " + date[1]} {date[3]}!
                </Text>
            </Text>
        </>
    )
}