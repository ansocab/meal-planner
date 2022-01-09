import React, {useState} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Flex, Button, FormControl, Input, Text, TextArea} from 'native-base';

import TimePicker from './TimePicker';
import QuantitySelector from './QuantitySelector';
import ListInput from './InputList';
import {Recipe} from '../../models/Recipe';

const RecipeForm = () => {
  const {control, handleSubmit, watch} = useForm<Recipe>();
  const watchPrepTime = watch('preparationTime', 0);
  const [showTimePicker, setShowTimePicker] = useState<boolean>();

  const onSubmit: SubmitHandler<Recipe> = data => {
    console.log(data);
  };

  const formatPrepTime = (time: number) => {
    let textToDisplay: string = '';

    if (time === 0) textToDisplay = 'Select time';

    const selectedHours = Math.floor(time / 60);
    const selectedMinutes = time - selectedHours * 60;

    if (selectedMinutes > 0) textToDisplay = `${selectedMinutes} mins`;

    if (selectedHours > 1) {
      textToDisplay = `${selectedHours} hrs ${textToDisplay}`;
    } else if (selectedHours === 1) {
      textToDisplay = `${selectedHours} hr ${textToDisplay}`;
    }

    return textToDisplay;
  };

  return (
    <Flex w={'100%'} px={3} alignItems="center">
      <FormControl isRequired>
        <FormControl.Label>
          <Text color="primary.500">Recipe Name</Text>
        </FormControl.Label>
        <Controller
          name="title"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
        />
      </FormControl>

      <FormControl>
        <FormControl.Label color={'red.100'}>
          <Text color="primary.500">Preparation Time</Text>
        </FormControl.Label>
        <Button
          w="130px"
          bgColor={'light.50'}
          mb={'1.5'}
          onPress={() => setShowTimePicker(!showTimePicker)}>
          <Text style={{color: 'darkText'}}>
            {formatPrepTime(watchPrepTime || 0)}
          </Text>
        </Button>
        {showTimePicker && (
          <Controller
            name="preparationTime"
            control={control}
            render={({field: {onChange, value}}) => (
              <TimePicker selectedValue={value ?? 0} onValueChange={onChange} />
            )}
          />
        )}
      </FormControl>

      <FormControl>
        <FormControl.Label>
          <Text color="primary.500">Number of Portions</Text>
        </FormControl.Label>
        <Controller
          name="portions"
          control={control}
          render={({field: {onChange, value}}) => (
            <QuantitySelector
              selectedValue={value ?? 0}
              onValueChange={onChange}
            />
          )}
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>
          <Text color="primary.500">Ingredients</Text>
        </FormControl.Label>
        <Controller
          name="ingredients"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <ListInput onValueChange={onChange} value={value ?? []} />
          )}
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>
          <Text color="primary.500">Directions</Text>
        </FormControl.Label>
        <Controller
          name="directions"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextArea onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
        />
      </FormControl>

      <Button w="45%" onPress={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </Flex>
  );
};

export default RecipeForm;
