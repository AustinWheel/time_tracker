import { Button, Separator, XStack } from 'tamagui'
import { Trash2 } from '@tamagui/lucide-icons'
import { red } from '../../assets/themes/colors'
import React, { useState, useContext } from 'react'
import { TimerContext } from '../context/TimerContext'
import {
Adapt,
Dialog,
Fieldset,
Paragraph,
Sheet,
} from 'tamagui'
import { useAuth } from '@clerk/clerk-expo';
import { deleteActivity } from '../api/activitiesApi';
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function DeleteDialog({id, name}: any) {
    const [open, setOpen] = useState(false);
    const { getToken } = useAuth();
    const { initialTime, setInitialTime, setSelectedTime } = useContext(TimerContext);


    const queryClient = useQueryClient();
    const deleteItem = useMutation({
        mutationFn: async () => {
            const token = await getToken();
            deleteActivity({id: id}, token)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['activities']});
            console.log(`Activity deleted: ${name}`);
            if (initialTime[1] === id) {
                setInitialTime([0, null]);
                setSelectedTime(0);
            }
        },
    });

    // const deleteItem = async () => {
    //     const token = await getToken();
    //     const resp = await deleteActivity({
    //         id: id,
    //     },token);
    //     if (resp.status !== 200) {
    //         console.log(resp);
    //     }
    // }

    return (
        <Dialog
        modal
        onOpenChange={(open) => {
            setOpen(open)
        }}
        >
            <Dialog.Trigger alignSelf='center'>
                <Trash2 
                    size={40} 
                    color={red.red10}
                />
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
                Delete Activity
            </Dialog.Title>

            <Dialog.Description
                style={{ 
                    fontFamily: 'MunroSmall',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: "gray",
                }}
            >
                Are you sure you want to delete this activity?
            </Dialog.Description>

            <Fieldset gap="$4" horizontal alignSelf='center'>
                <Separator alignSelf="stretch" vertical/>
                <Paragraph style={{
                    fontFamily: "MunroSmall",
                    fontSize: 20,
                    }}
                >
                    {name}
                </Paragraph>
                <Separator alignSelf="stretch" vertical/>

            </Fieldset>

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
                    color={red.red10}
                    fontWeight={"bold"}
                    onPress={() => {
                        deleteItem.mutate();
                    }}
                >
                    Delete
                </Button>
                </Dialog.Close>
            </XStack>
            </Dialog.Content>
        </Dialog.Portal>
        </Dialog>

    )
}
