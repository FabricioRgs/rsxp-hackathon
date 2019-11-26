import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';
import {colors} from '~/styles';

export const Container = styled(BaseButton)`
  height: 46px;
  background: ${colors.app};

  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: ${colors.primaryDarker};
  font-weight: bold;
  font-size: 16px;
`;
