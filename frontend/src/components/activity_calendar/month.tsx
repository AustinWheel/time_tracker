import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LEVEL_COLOR } from '../../../assets/themes/colors';

interface MonthProps {
    month: string;
    year: number;
    mo: number;
    data: any;
}

const Month: React.FC<MonthProps> = ({ month, year, mo, data }) => {
    // Generate an array of days for the month
    const daysInMonth = new Date(year, new Date(year, mo, 1).getMonth() + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const firstDayOfWeek = new Date(year, mo, 1).getDay();

    // Add blank spaces to the start of the array
    const paddedDaysArray = Array(firstDayOfWeek).fill(null).concat(daysArray);

    // Generate an array of weeks (columns) with 7 days each
    const weeksArray = Array.from({ length: Math.ceil(paddedDaysArray.length / 7) }, (_, index) =>
        paddedDaysArray.slice(index * 7, (index + 1) * 7)
    );

    return (
        <View style={{flexDirection: 'column', height: 150}}>
            <Text style={styles.monthText}>{month}</Text>
            <View style={styles.container}>
                {weeksArray.map((week, index) => (
                    <View key={index}>
                        {week.map((day, j) => {
                            let dayData = data.filter((obj) => obj["day"] === day);
                            dayData = dayData.length > 0 ? dayData[0] : null;
                            return day !== null ?
                            (
                                dayData === null ? (
                                    <View key={j} style={{...styles.dayContainer}}>
                                        <View style={{...styles.day,  backgroundColor: getColor(0)}}/>
                                    </View>
                                ) :
                                (<View key={j} style={{...styles.dayContainer}}>
                                    <View style={{...styles.day,  backgroundColor: getColor(dayData["actions"])}}/>
                                </View>)
                            )
                            :(<View key={j} style={{...styles.dayContainer, backgroundColor: "#fff"}} />)
                        })}
                    </View>
                ))}
            </View>
        </View>
    );
};

const getColor = (value: number) => {
    return LEVEL_COLOR.light[value > 4 ? 4 : value];
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    monthText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'MunroSmall',
        marginLeft: 20,
    },
    dayContainer: {
        width: 17,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        fontSize: 5,
    },
    day: {
        width: 15,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
});

export default Month;
