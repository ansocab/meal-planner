import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {HStack, Spacer} from 'native-base';
import {Picker} from '@react-native-picker/picker';

type TimePickerProps = {
  selectedValue: number;
  onValueChange: (newTime: number) => void;
};

type Time = {
  hours: number | 0;
  minutes: number | 0;
};

const pickerStyle = {
  width: '30%',
};

const pickerItemStyle = {
  fontSize: 20,
};

const TimePicker = ({selectedValue, onValueChange}: TimePickerProps) => {
  const {control, watch, setValue} = useForm<Time>();

  useEffect(() => {
    if (selectedValue !== undefined) {
      const selectedHours = Math.floor(selectedValue / 60);
      const selectedMinutes = selectedValue - selectedHours * 60;
      setValue('hours', selectedHours);
      setValue('minutes', selectedMinutes);
    }
  }, []);

  useEffect(() => {
    const subscription = watch(data => {
      if (data.hours !== undefined && data.minutes !== undefined) {
        const newTime = data.hours * 60 + data.minutes;
        onValueChange(newTime);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <HStack alignItems="center" bgColor={'light.50'} borderRadius={'5'}>
      <Controller
        name="hours"
        control={control}
        render={({field: {onChange, value}}) => (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={pickerStyle}
            itemStyle={pickerItemStyle}>
            {[...Array(24)].map((x, i) => (
              <Picker.Item label={i.toString()} value={i} key={i} />
            ))}
          </Picker>
        )}
      />
      <Text>Hours</Text>
      <Spacer />
      <Controller
        name="minutes"
        control={control}
        render={({field: {onChange, value}}) => (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={pickerStyle}
            itemStyle={pickerItemStyle}>
            {[...Array(60)].map((x, i) => {
              {
                if (i % 5 == 0) {
                  return <Picker.Item label={i.toString()} value={i} key={i} />;
                }
              }
            })}
          </Picker>
        )}
      />
      <Text style={{paddingRight: 10}}>Minutes</Text>
    </HStack>
  );
};

export default TimePicker;
