import React from 'react';
import {NativeBaseProvider, Center} from 'native-base';
import AddRecipe from '../views/AddRecipe';

const App = () => (
  <NativeBaseProvider>
    <Center flex={1} safeArea>
      <AddRecipe />
    </Center>
  </NativeBaseProvider>
);

export default App;
