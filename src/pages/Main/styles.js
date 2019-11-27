import styled from 'styled-components/native';
import {colors} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 14px;
  align-self: center;
  color: ${colors.primaryLight};
`;

export const List = styled.FlatList`
  /* margin-top: 10px; */
  padding: 0px 10px;
`;

export const ItemEmpty = styled.View`
  background-color: ${colors.transparent};
`;

export const Item = styled.View`
  background-color: ${colors.transparent};
  flex: 1;
  align-items: center;
`;

export const Touch = styled.View.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${colors.app};
  padding: 10px;
  border-width: 1px;
  border-color: ${colors.primary};
  border-radius: 5px;
  margin-top: 5px;
`;

export const TxtOption = styled.Text`
  color: ${colors.regular};
  font-size: 16px;
`;

export const Img = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Line = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TxtDescription = styled.Text`
  color: ${colors.darker};
  font-size: 14px;
  margin: 5px 2px;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Category = styled.View`
  height: 30px;
  width: 70px;
  background: ${props => props.background};
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  border-radius: 5px;
`;

export const TxtCategory = styled.Text`
  color: ${colors.app};
  font-size: 12px;
  margin: 5px 2px;
`;

export const ContentText = styled.View`
  height: 25px;
  background-color: ${colors.darkTransparent};
  border-radius: 10px;
  justify-content: center;
  margin: 0 60px 5px;
`;

export const MediaContainer = styled.View`
  height: 250px;
  width: 100%;
  margin: 5px 0px 10px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.app,
})``;
