import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';
import {colors} from '~/styles';

export const Container = styled(BaseButton)`
  height: 46px;
  background: ${colors.blueDark};

  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
