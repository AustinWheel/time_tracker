import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, YGroup } from 'tamagui';
import { DeleteAccountDialog } from './DeleteAccountDialog';
import { LogoutAccountDialog } from './LogoutAccoutDialog';

const Utilities = () => {
    return (
        <YGroup alignSelf="center" bordered width={"100%"} size="$4">
        <YGroup.Item>
            <LogoutAccountDialog />
        </YGroup.Item>
        <YGroup.Item>
            <DeleteAccountDialog />
        </YGroup.Item>
        </YGroup>
    )
}

export const ProfileUtils = () => {
    return (
        <>
        <View
            style={styles.sideContainer}
        >
            <View paddingBottom="$2.5">
                <Text style={{ textAlign: 'left', fontSize: 20 }}>
                    Utilities
                </Text>
            </View>
        </View>
        <Utilities />
        </>
    )
};

const styles = StyleSheet.create({
    sideContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });