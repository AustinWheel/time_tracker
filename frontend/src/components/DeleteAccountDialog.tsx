import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { red } from '../../assets/themes/colors';
import { ChevronRight, UserMinus } from '@tamagui/lucide-icons';
import { ListItem, Dialog, Sheet, Adapt, Button, XStack, Text } from 'tamagui';


export const DeleteAccountDialog = () => {
    const [open, setOpen] = useState(false);

    const { user } = useUser();
    const doDeleteAccount = () => {
        user.delete();
    };
    return (
        <Dialog
            modal
            onOpenChange={(open) => {
                setOpen(open)
            }}
        >
            <Dialog.Trigger >
                <ListItem fontSize={18} icon={UserMinus} color={red.red10} iconAfter={ChevronRight}>
                    <Text style={{ flex:1 ,color: red.red10, fontSize: 18, alignSelf: "flex-start", verticalAlign: "middle"}}>
                        Delete Account
                    </Text>
                </ListItem>
            </Dialog.Trigger>
            <Adapt platform="touch">
                <Sheet zIndex={200000} modal dismissOnSnapToBottom>
                    <Sheet.Frame padding="$4" gap="$4">
                        <Adapt.Contents />
                    </Sheet.Frame>
            <Sheet.Overlay
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
            />
            </Sheet>
        </Adapt>
        <Dialog.Portal>
            <Dialog.Overlay
            key="overlay"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
            />
            <Dialog.Content
            bordered
            elevate
            key="content"
            animateOnly={['transform', 'opacity']}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
            >

            <Dialog.Title
                style={{ fontFamily: 'MunroSmall', fontSize: 35 }}
            >
                Delete Account
            </Dialog.Title>

            <Dialog.Description
                style={{ 
                    fontFamily: 'MunroSmall',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: "gray",
                }}
            >
                Are you sure you want to delete your account? Doing so will permanently delete all of your data.
            </Dialog.Description>

            <XStack alignSelf="center" gap="$3">
            <Dialog.Close displayWhenAdapted asChild>
                <Button 
                    aria-label="Close"
                    fontFamily='MunroSmall'
                    fontSize={20}
                    color={"gray"}
                >
                    Cancel
                </Button>
                </Dialog.Close>
                <Dialog.Close displayWhenAdapted asChild>
                <Button 
                    aria-label="Close" 
                    fontFamily='MunroSmall'
                    fontSize={20}
                    fontWeight={"bold"}
                    color={red.red10}
                    onPress={doDeleteAccount}
                >
                    Delete
                </Button>
                </Dialog.Close>
            </XStack>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog>)
}