import React from "react";
import { YGroup, ListItem, YStack, ScrollView } from "tamagui";
import { getActivities } from "../api/activitiesApi";
import { useAuth } from "@clerk/clerk-expo";
import { useQuery } from "@tanstack/react-query";
import { StyleSheet, Text } from "react-native";
import { ChevronRight, Scroll} from '@tamagui/lucide-icons';
import { green, greenA } from "../../assets/themes/colors";

export const ListofActivities = () => {
    const { getToken } = useAuth();
    const [intervalMs, setIntervalMs] = React.useState(5000);
    
    const {data, isLoading, isError} = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const token = await getToken();
            const resp = await getActivities(token);
            return resp.data;
        },
        refetchInterval: intervalMs,
    });
    return (
    <ScrollView alignSelf="center" width={"100%"} style={{backgroundColor: "#fff", marginBottom: 127}}>
            <YStack space="$2" style={{backgroundColor: "#fff"}}>
                { !isLoading && !isError &&
                data.map((activity) => (
                    <ListItem
                        onPress={() => console.log("Pressed")}
                        iconAfter={<ChevronRight size={24} />}
                        style={styles.container}
                        key={activity.id}
                        pressStyle={{ backgroundColor: green.green6 }}
                    >
                        <Text style={styles.text}>
                            {activity.name}{"\n"}
                            <Text style={{color: "gray"}}>
                            {activity.time_logged}
                            </Text>
                        </Text>
                    </ListItem>
                )
                )}
            </YStack>
        </ScrollView>
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