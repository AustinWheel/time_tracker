
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { green } from '../../../assets/themes/colors';
import { ViewStyle } from 'react-native';
import { ScrollView, YStack } from 'tamagui';
import Month from './month';

interface CalendarProps {
    data: number[];
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
    const getArray = (start, stop, step) => {
        return Array.from({ length: (stop - start) / step + 1 },
        (v, i) => start + (i * step));
    };
    const months = getArray(0, 11, 1);

    return (
        <ScrollView>
            <YStack style={styles.container} space="$0.25">
                {months.map((month, index) => (
                    <Month key={index} month={getMonthName(month)} year={2024} mo={month} data={data.filter((obj) => obj["month"] === month+1)}/>
                ))} 
            </YStack>
        </ScrollView>
    );
};

const getMonthName = (month: number) => {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString('default', { month: 'short' });
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        backgroundColor: "#fff",
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "MunroSmall", 
    },
})

export default Calendar;
