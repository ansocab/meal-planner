import {extendTheme} from 'native-base';

const customTheme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        bgColor: 'light.50',
      },
      defaultProps: {size: 'md'},
    },
    FormControl: {
      defaultProps: {mb: '5'},
    },
  },
});

export default customTheme;
