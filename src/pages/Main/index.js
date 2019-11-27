import React, {useState, useEffect} from 'react';
import {StatusBar, Image} from 'react-native';
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
  ContainerLoading,
  ActivityIndicator,
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

import {colors} from '~/styles';
import api from '~/services/api';

export default function Main({navigation}) {
  var player;

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    var fetchedPosts = await api.get('/posts');
    setPosts(fetchedPosts.data);
    setLoading(false);
  }

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
        {loading ? (
          <ContainerLoading>
            <ActivityIndicator />
          </ContainerLoading>
        ) : (
          <List
            listKey={(item, index) => index}
            data={posts}
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
                    {item.media.type === 'video' && (
                      <YouTube
                        apiKey="AIzaSyAtwflJjX65-8nnONj0WtShZ98kUHpkCOg"
                        videoId={item.media.id}
                        style={{alignSelf: 'stretch', height: 250}}
                      />
                    )}
                    {item.media.type === 'image' && (
                      <Image
                        source={{uri: item.media.uri}}
                        style={{alignSelf: 'stretch', height: 250}}
                      />
                    )}
                  </MediaContainer>
                )}
                <Footer>
                  {item.categories.map(cat => {
                    return (
                      <Category key={cat.id} background={cat.color}>
                        <TxtCategory>{cat.title}</TxtCategory>
                      </Category>
                    );
                  })}
                </Footer>
              </Touch>
            )}
          />
        )}
      </Container>
    </Background>
  );
}
