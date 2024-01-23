import React, { useState, useContext } from "react";
import { ListItem, YStack, ScrollView, XStack, Separator, View } from "tamagui";
import { getActivities } from "../api/activitiesApi";
import { useAuth } from "@clerk/clerk-expo";
import { useQuery } from "@tanstack/react-query";
import { StyleSheet, Text } from "react-native";
import { ChevronRight, Scroll} from '@tamagui/lucide-icons';
import { green, greenA } from "../../assets/themes/colors";
import { Link, router } from "expo-router";
import Timer from "./Timer";
import { ActivityIndicator } from 'react-native';
import { TimerContext } from "../../src/context/TimerContext";

export const ListofActivities = () => {
    const { getToken } = useAuth();
    const [intervalMs, setIntervalMs] = React.useState(5000);
    
    let {data, isLoading, isError} = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const token = await getToken();
            const resp = await getActivities(token);
            return resp.data;
        },
        refetchInterval: intervalMs,
    });
    const { setInitialTime, setSelectedTime } = useContext(TimerContext);

    return (
        <View>
            {!isLoading && !isError ?(
            <>
                <Timer/>
                <ScrollView alignSelf="center" width={"100%"} style={{backgroundColor: "#fff", marginBottom: 127}}>
                    <YStack space="$2" style={{backgroundColor: "#fff"}}>
                        {data.map((activity) => (
                            <ListItem
                                iconAfter={<ChevronRight size={24} />}
                                onPress={() => {
                                    setInitialTime(activity.time_logged)
                                    setSelectedTime(activity.time_logged)
                                }}
                                style={styles.container}
                                key={activity.id}
                                pressStyle={{ backgroundColor: green.green6 }}
                            >
                                <XStack space="$3">
                                    <Text style={{...styles.text, color: "gray"}}>
                                        {"name"}{"\n"}
                                        <Text style={{color: "gray", fontSize: 20, fontWeight: 'bold'}}>
                                        hh:mm:ss
                                        </Text>
                                    </Text>
                                    <Separator alignSelf="stretch" vertical/>
                                    <Text style={styles.text}>
                                        {activity.name}{"\n"}
                                        <Text style={{color: "gray", fontSize: 20, fontWeight: 'bold'}}>
                                        {String(Math.floor(activity.time_logged / 3600)).length < 2 ? "0" + Math.floor(activity.time_logged / 3600) : Math.floor(activity.time_logged / 3600)}
                                        :{String(Math.floor((activity.time_logged % 3600) / 60)).length < 2 ? "0" + Math.floor((activity.time_logged % 3600) / 60) : Math.floor((activity.time_logged % 3600) / 60) }
                                        :{String((activity.time_logged % 3600) % 60).length < 2 ? "0" + (activity.time_logged % 3600) % 60 : (activity.time_logged % 3600) % 60 }
                                        </Text>
                                    </Text>
                                </XStack>
                            </ListItem>
                        ))}
                    </YStack>
                </ScrollView>
            </>) : (<ActivityIndicator size="large" color={green.green10} />)}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "MunroSmall",
    },
    container: {
        borderRadius: 10,
    }

});