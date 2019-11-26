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
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const List = styled.FlatList`
  margin: 10px 0;
  border-radius: 4px;
  z-index: 1;
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
    props.selected ? darken(0.2, props.background) : props.background};
  height: 150px;
  width: 150px;
  border-radius: 75px;
  justify-content: center;
  align-items: center;
  margin-top: ${props => (props.tag === 1 ? '0px' : '30px')};
  border-width: 2px;
  border-color: ${colors.app};
`;

export const TxtOption = styled.Text`
  color: ${colors.app};
  font-size: 22px;
  margin-top: 5px;
  font-weight: bold;
`;

export const IconAwesome = styled(IconFontAwesome).attrs({
  size: 30,
  color: colors.app,
})``;

export const Title = styled.Text`
  text-align: center;
  color: ${colors.app};
  font-size: 22px;
`;

export const TitleBold = styled.Text`
  text-align: center;
  color: ${colors.app};
  font-size: 22px;
  font-weight: bold;
  /* margin-left: 3px; */
`;
