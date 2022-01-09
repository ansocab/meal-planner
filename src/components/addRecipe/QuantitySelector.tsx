import React from 'react';
import {Text, Center, HStack, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type QuantitySelectorProps = {
  selectedValue: number;
  onValueChange: (newTime: number) => void;
};

type QuantitySelectorButtonProps = {
  iconName: string;
  action: () => void;
};

const QuantitySelectorButton = ({
  iconName,
  action,
}: QuantitySelectorButtonProps) => {
  return (
    <Button onPress={action} py={0} bgColor={'light.50'}>
      <Icon size={16} name={iconName} />
    </Button>
  );
};

const QuantitySelector = ({
  selectedValue,
  onValueChange,
}: QuantitySelectorProps) => {
  const decreaseValue = () => {
    if (selectedValue !== 0) selectedValue -= 1;
    onValueChange(selectedValue);
  };

  const increaseValue = () => {
    selectedValue += 1;
    onValueChange(selectedValue);
  };

  return (
    <HStack
      alignItems={'center'}
      justifyContent={'space-between'}
      bgColor={'light.50'}
      borderRadius={5}
      w={100}
      h={35}>
      <QuantitySelectorButton iconName="minus" action={decreaseValue} />
      <Text bold>{selectedValue}</Text>
      <QuantitySelectorButton iconName="plus" action={increaseValue} />
    </HStack>
  );
};

export default QuantitySelector;
