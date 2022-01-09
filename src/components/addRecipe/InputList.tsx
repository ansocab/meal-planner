import React, {useEffect, useState} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Button, FlatList, HStack, Input, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Ingredient} from '../../models/Recipe';

type InputListProps = {
  value: Ingredient[];
  onValueChange: (newList: Ingredient[]) => void;
};

const InputList = ({value, onValueChange}: InputListProps) => {
  const {control, handleSubmit, reset, formState} = useForm<Ingredient>({
    defaultValues: {quantity: '', name: ''},
  });
  const [ingredientList, setIngredientList] = useState<Ingredient[]>(value);

  const onSubmit: SubmitHandler<Ingredient> = data => {
    onValueChange([...ingredientList, data]);
    setIngredientList(prev => [...prev, data]);
    reset();
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <VStack>
      <FlatList
        data={value}
        mb={2}
        renderItem={({item}) => (
          <HStack alignItems={'center'} mb={1}>
            <Icon size={16} name={'circle-medium'} color={'#06b6d4'} />
            <Text>{item.quantity + ' ' + item.name}</Text>
          </HStack>
        )}
      />
      <HStack justifyContent={'space-between'}>
        <Controller
          name="quantity"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              w={'22%'}
              placeholder="Quantity"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              w={'64%'}
              placeholder="Ingredient"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Button py={0} bgColor={'light.50'} onPress={handleSubmit(onSubmit)}>
          <Icon size={16} name={'plus'} />
        </Button>
      </HStack>
    </VStack>
  );
};

export default InputList;
