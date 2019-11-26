import React from 'react';
import {StatusBar} from 'react-native';
import Video from 'react-native-video';

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
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

const companies = [
  {
    id: 1,
    name: 'Empresa A',
    description:
      'saldfjadskf adskfjaklds falkdjsf afklsdkjfkla akasjdkal alksdjfakljsd asdklfjakldsjfkla adsklfjak kdf kfalsdjf adksfjkaldjf',
    categories: [
      {
        id: 1,
        title: 'Negócios',
        color: '#8E2DE2',
      },
    ],
    color: 'blue',
    link:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
  {
    id: 2,
    name: 'Empresa B',
    description:
      'saldfjadskf adskfjaklds falkdjsf afklsdkjfkla akasjdkal alksdjfakljsd asdklfjakldsjfkla adsklfjak kdf kfalsdjf adksfjkaldjf',
    categories: [
      {
        id: 1,
        title: 'Negócios',
        color: '#8E2DE2',
      },
    ],
    color: 'blue',
    link:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
  {
    id: 3,
    name: 'Empresa C',
    description:
      'saldfjadskf adskfjaklds falkdjsf afklsdkjfkla akasjdkal alksdjfakljsd asdklfjakldsjfkla adsklfjak kdf kfalsdjf adksfjkaldjf',
    categories: [
      {
        id: 1,
        title: 'Negócios',
        color: '#8E2DE2',
      },
    ],
    color: 'blue',
    link:
      'https://www.designreligion.co.uk/wp-content/uploads/upc2aeefb88f-1024x1024.jpg',
  },
  {
    id: 4,
    name: 'Empresa D',
    description:
      'saldfjadskf adskfjaklds falkdjsf afklsdkjfkla akasjdkal alksdjfakljsd asdklfjakldsjfkla adsklfjak kdf kfalsdjf adksfjkaldjf',
    categories: [
      {
        id: 1,
        title: 'Negócios',
        color: '#8E2DE2',
      },
    ],
    color: 'blue',
    link:
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
        <Text>Assuntos de seu interesse:</Text>
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
                <Img source={{uri: item.link}} />
                <TxtOption>{item.name}</TxtOption>
              </Line>
              <TxtDescription>{item.description}</TxtDescription>
              <Video
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
              />
              <Footer>
                <Category background={item.color} />
              </Footer>
            </Touch>
          )}
        />
      </Container>
    </Background>
  );
}
