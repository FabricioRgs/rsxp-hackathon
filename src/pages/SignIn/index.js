import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Title,
  TitleBold,
  BtClick,
  List,
  Item,
  IconAwesome,
  Touch,
  TxtOption,
} from './styles';
import Background from '~/components/Background';

import {colors} from '~/styles';

import api from '~/services/api';

export default function SignIn({navigation}) {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const fetchedCategories = await api.get('/categories');
    setCategories(fetchedCategories.data);
  }

  function handleSubmit() {
    navigation.navigate('Main');
  }

  function handleOption(item) {
    const aux = categories.map(i => {
      if (i.title === item.title) {
        i.selected = !i.selected;
        return i;
      } else {
        return i;
      }
    });

    setCategories(aux);
  }

  return (
    <Background>
      <Container>
        <StatusBar
          backgroundColor={colors.primaryDarker}
          barStyle="light-content"
        />
        <Form>
          <>
            <BtClick>
              <Title>be</Title>
              <TitleBold>tech</TitleBold>
            </BtClick>
            <FormInput
              icon="person"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Digite seu nome"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={name}
              onChangeText={setName}
            />
            <List
              listKey={(item, index) => `D${index.toString()}`}
              data={categories}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({item}) => (
                <Item>
                  <Touch
                    selected={item.selected}
                    background={item.color}
                    tag={item.tag}
                    onPress={() => handleOption(item)}>
                    {item.selected && <IconAwesome name="check" />}
                    <TxtOption>{item.title}</TxtOption>
                  </Touch>
                </Item>
              )}
            />
          </>
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

console.disableYellowBox = false;
