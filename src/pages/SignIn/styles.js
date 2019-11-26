import {Platform} from 'react-native';
import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {darken} from 'polished';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {colors} from '~/styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  padding: 0 10px;
`;

export const Form = styled.View`
  flex: 1;
  align-self: stretch;
  margin: 50px 0;
  justify-content: space-between;
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

export const List = styled.FlatList`
  margin-top: 10px;
`;

export const ItemEmpty = styled.View`
  background-color: ${colors.transparent};
`;

export const Item = styled.View`
  background-color: ${colors.transparent};
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  /* height: 170px; */
  /* border-width: 1px; */
`;

export const Touch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${props =>
    props.selected ? darken(0.1, colors.primaryDarker) : colors.primaryDarker};
  height: 150px;
  width: 150px;
  border-radius: 75px;
  justify-content: center;
  align-items: center;
  margin-top: ${props => (props.tag === 1 ? '0px' : '30px')};
  border-width: 6px;
  border-color: ${colors.primary};
`;

export const TxtOption = styled.Text`
  color: ${colors.app};
  font-size: 16px;
  margin-top: 5px;
`;

export const IconAwesome = styled(IconFontAwesome).attrs({
  size: 50,
  color: colors.app,
})``;
