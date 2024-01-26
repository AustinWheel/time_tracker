import { CalendarDays} from '@tamagui/lucide-icons'
import React, { useState, useContext } from 'react'
import {
Adapt,
Dialog,
Sheet,
} from 'tamagui'
import Calendar from './calendar';

export function CalendarDialog({data}: any) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog
        modal
        onOpenChange={(open) => {
            setOpen(open)
        }}
        >
            <Dialog.Trigger alignSelf='center'>
                <CalendarDays 
                    size={25}
                />
            </Dialog.Trigger>
            <Adapt platform="touch">
                <Sheet zIndex={200000} modal dismissOnSnapToBottom>
                    <Sheet.Frame backgroundColor={"#fff"}>
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
            >

            <Dialog.Title
                style={{ fontFamily: 'MunroSmall', fontSize: 35, paddingLeft: 16 }}
            >
                Activity Calendar
            </Dialog.Title>
            <Calendar data={data}/>

            </Dialog.Content>
        </Dialog.Portal>
        </Dialog>

    )
}
