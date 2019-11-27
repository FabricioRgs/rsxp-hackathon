import React from 'react';
import {StatusBar} from 'react-native';
import YouTube from 'react-native-youtube';

import {
  Container,
  Text,
  List,
  Img,
  Touch,
  TxtOption,
  Line,
  TxtDescription,
  Footer,
  Category,
  TxtCategory,
  ContentText,
  MediaContainer,
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

import {colors} from '~/styles';

const companies = [
  {
    id: 1,
    name: 'Riot Games',
    description:
      'Mostraremos aqui como é o nosso processo de criação, e como nosso time trabalha!',
    categories: [
      {
        id: 5,
        title: 'Jogos',
        color: '#F16529',
      },
    ],
    color: 'blue',
    img:
      'https://www.riotgames.com/darkroom/800/4055f068b0bc39bbe60d08491a39994b:0ff2ceae3e7bed5e6f2c9c5a1aded2c0/riot-fist-container-white-red.png',
    media: {
      type: 'video',
      uri: 'https://www.youtube.com/watch?v=zSo8Zbvh9mg',
      id: 'zSo8Zbvh9mg',
    },
  },
  {
    id: 2,
    name: 'Empresa B',
    description:
      'I was looking for a native video component in React Native and was not able to find one, so I decided to draft this piece about a library I found by react-native-community called react-native-video.',
    categories: [
      {
        id: 4,
        title: 'Esporte',
        color: '#00b09b',
      },
    ],
    color: 'blue',
    img:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
  {
    id: 3,
    name: 'Empresa C',
    description:
      'I was looking for a native video component in React Native and was not able to find one, so I decided to draft this piece about a library I found by react-native-community called react-native-video.',
    categories: [
      {
        id: 2,
        title: 'Saúde',
        color: '#f12711',
      },
    ],
    color: 'blue',
    img:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
  {
    id: 5,
    name: 'Empresa F',
    description:
      'I was looking for a native video component in React Native and was not able to find one, so I decided to draft this piece about a library I found by react-native-community called react-native-video.',
    categories: [
      {
        id: 1,
        title: 'Negócios',
        color: '#8E2DE2',
      },
      {
        id: 2,
        title: 'Saúde',
        color: '#f12711',
      },
    ],
    color: 'blue',
    img:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
  {
    id: 4,
    name: 'Empresa D',
    description:
      'I was looking for a native video component in React Native and was not able to find one, so I decided to draft this piece about a library I found by react-native-community called react-native-video.',
    categories: [
      {
        id: 1,
        title: 'Negócios',
        color: '#8E2DE2',
      },
      {
        id: 4,
        title: 'Esporte',
        color: '#00b09b',
      },
    ],
    color: 'blue',
    img:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
];

export default function Main({navigation}) {
  var player;
  function handleOption(item) {}
  return (
    <Background>
      <Container>
        <Header navigation={() => navigation.navigate('SignIn')} />
        <StatusBar
          backgroundColor={colors.primaryDarker}
          barStyle="light-content"
        />
        <ContentText>
          <Text>Assuntos de seu interesse:</Text>
        </ContentText>
        <List
          listKey={(item, index) => index}
          data={companies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Touch
              selected={item.selected}
              tag={item.tag}
              onPress={() => handleOption(item)}>
              <Line>
                <Img source={{uri: item.img}} />
                <TxtOption>{item.name}</TxtOption>
              </Line>
              <TxtDescription>{item.description}</TxtDescription>
              {item.media && (
                <MediaContainer>
                  {item.media.type == 'video' && (
                    <YouTube
                      apiKey="AIzaSyAtwflJjX65-8nnONj0WtShZ98kUHpkCOg"
                      videoId={item.media.id}
                      style={{alignSelf: 'stretch', height: 250}}
                    />
                  )}
                </MediaContainer>
              )}
              <Footer>
                {item.categories.map(cat => {
                  return (
                    <Category background={cat.color}>
                      <TxtCategory>{cat.title}</TxtCategory>
                    </Category>
                  );
                })}
              </Footer>
            </Touch>
          )}
        />
      </Container>
    </Background>
  );
}
