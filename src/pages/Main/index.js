import React from 'react';
import {StatusBar} from 'react-native';
// import Video from 'react-native-video';

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
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

const companies = [
  {
    id: 1,
    name: 'Empresa A',
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
        id: 5,
        title: 'Jogos',
        color: '#F16529',
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
        <StatusBar barStyle="light-content" />
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
              {/* <Video
                ref={ref => {
                  player = ref;
                }}
                source={{uri: 'https://www.youtube.com/watch?v=ixbvCw-YiOA'}} // Can be a URL or a localfile.
                onBuffer={() => null} // Callback when remote video is buffering
                onEnd={() => null} // Callback when playback finishes
                onError={() => null} // Callback when video cannot be loaded
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              /> */}
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
