import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors, metrics} from '~/styles';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  height: 50px;
  background: transparent;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
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
  /* width: ${metrics.screenWidth - 90}; */
  text-align: center;
  color: ${colors.app};
  font-size: 18px;
`;
