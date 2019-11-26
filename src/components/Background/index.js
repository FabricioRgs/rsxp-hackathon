import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {colors} from '~/styles';

export default styled(LinearGradient).attrs({
  colors: [colors.primaryLight, colors.primary],
})`
  flex: 1;
`;
