import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {colors} from '~/styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const TxtCompany = styled.Text`
  font-size: 20px;
  align-self: center;
  margin-bottom: 20px;
  color: ${colors.app};
`;

export const BtClick = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;
