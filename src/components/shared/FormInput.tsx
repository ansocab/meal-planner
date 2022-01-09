import React from 'react';

import {View, TextInput, Text, TextStyle} from 'react-native';
import {Input, Box} from 'native-base';
import {Controller, FieldError} from 'react-hook-form';

type CustomInputProps = {
  name: string;
  label: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
};

/* type FormInputProps = {
  name: string;
  label: string;
  control: any;
}; */

export const FormInput = React.forwardRef<any, CustomInputProps>(
  (props, ref) => {
    const {label, error, ...inputProps} = props;

    return (
      <Box width="100%">
        {label && <Text>{label}</Text>}
        <Input autoCapitalize="none" ref={ref} {...inputProps} />
        <Text>{error && error.message}</Text>
      </Box>
    );
  },
);

/* export const FormInput = React.forwardRef<any, FormInputProps>((props, ref) => {
  const {name, label, control} = props;
//export const FormInput = ({name, label, control}: FormInputProps) => {
  return (
    <Controller
      name="title"
      control={control}
      render={({field}) => <CustomInput {...field} label={label} />}
    />
  );
}; */
