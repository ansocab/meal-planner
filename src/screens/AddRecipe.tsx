import React from 'react';
import {Center} from 'native-base';

import RecipeForm from '../components/addRecipe/RecipeForm';

const AddRecipe = () => {
  return (
    <Center safeArea>
      <RecipeForm />
    </Center>
  );
};

export default AddRecipe;
