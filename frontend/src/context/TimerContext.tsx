import React, { createContext } from 'react';
export const TimerContext = createContext({
    initialTime: 0,
    setInitialTime: (time: any) => {},
    selectedTime: 0,
    setSelectedTime: (time: any) => {},
});

export const TimerProvider = ({ children }: any) => {
    const [selectedTime, setSelectedTime] = React.useState(0);
    const [initialTime, setInitialTime] = React.useState(0);
    return (
        <TimerContext.Provider value={{ 
            initialTime, setInitialTime,
            selectedTime, setSelectedTime }}>
            {children}
        </TimerContext.Provider>
    );
}