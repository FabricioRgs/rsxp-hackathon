import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '~/styles';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  height: 80px;
  background: transparent;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ReturnButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
`;

export const IconRight = styled(Icon).attrs({
  name: 'close',
  color: colors.app,
  size: 32,
})``;

export const Title = styled.Text`
  text-align: center;
  color: ${colors.app};
  font-size: 36px;
`;

export const TitleBold = styled.Text`
  text-align: center;
  color: ${colors.app};
  font-size: 46px;
  font-weight: bold;
  margin-top: 15px;
  /* margin-left: 3px; */
`;
