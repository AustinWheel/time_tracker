import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, XStack } from 'tamagui';
import { green } from '../../assets/themes/colors';
import { Download, Pause, Play, PlayCircle, TimerReset, Timer as TimeStart } from '@tamagui/lucide-icons';
import { TimerContext } from '../context/TimerContext';
import { useAuth } from '@clerk/clerk-expo';
import { updateActivity } from '../api/activitiesApi';

const Timer = () => {
    const { selectedTime, setSelectedTime, initialTime, setInitialTime } = useContext(TimerContext);
    const { getToken } = useAuth();
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setSelectedTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const hours = Math.floor(selectedTime / 3600)
    const minutes = Math.floor((selectedTime % 3600) / 60)
    const seconds = (selectedTime % 3600) % 60

    const start = () => {
        setIsRunning(true);
    }

    const pause = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setIsRunning(false);
        setSelectedTime(initialTime[0]);
    }
    const saveTime = async () => {
        const token = await getToken();
        const resp = await updateActivity({
            id: initialTime[1],
            time_logged: selectedTime
        }, token);
        if (resp.status === 200) {
            setInitialTime([selectedTime, initialTime[1]]);
        } else {
            console.log(resp.status);
        }
    }

    return (
        <View>
            <Text style={styles.text}>{String(hours).length < 2 ? "0" + hours : hours}
            :{String(minutes).length < 2 ? "0" + minutes : minutes}
            :{String(seconds).length < 2 ? "0" + seconds : seconds}</Text>
            <XStack
                space="$2"
                alignSelf="center"
                style={{backgroundColor: "#fff", marginBottom: 40, marginTop: 10}}
            >
                <Button 
                    onPress={() => {
                        reset();
                        pause();
                    }} 
                    borderColor={green.green12} 
                    backgroundColor={"#fff"}
                    borderWidth={2}
                    width={50}
                    color={"#fff"} 
                    icon={<TimerReset size={35} color={green.green12} />}
                >
                </Button>
                <Button 
                    onPress={start} 
                    borderColor={green.green12} 
                    backgroundColor={"#fff"}
                    borderWidth={2}
                    width={50}
                    color={"#fff"} 
                    icon={<TimeStart size={35} color={green.green12} />}
                >
                </Button>
                <Button 
                    onPress={pause}
                    borderColor={green.green12}
                    backgroundColor={"#fff"}
                    borderWidth={2}
                    width={50}
                    color={"#fff"}
                    icon={<Pause size={35} color={green.green12} />}
                >
                </Button>
                <Button 
                    onPress={saveTime}
                    borderColor={green.green12}
                    backgroundColor={"#fff"}
                    borderWidth={2}
                    width={50}
                    color={"#fff"}
                    icon={<Download size={35} color={green.green12} />}
                />
            </XStack>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 16,
    },
    text: {
        fontSize: 60,
        alignSelf: "center",
        fontFamily: "MunroSmall", 
    },
})

export default Timer;