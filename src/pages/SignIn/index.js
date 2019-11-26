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

const categoriesInit = [
  {
    id: 1,
    title: 'Esporte',
    selected: false,
    color: '#00b09b',
    tag: 1,
  },
  {
    id: 2,
    title: 'Jogos',
    selected: false,
    color: '#F16529',
    tag: 2,
  },
  {
    id: 3,
    title: 'Negócios',
    selected: false,
    color: '#8E2DE2',
    tag: 1,
  },
  {
    id: 4,
    title: 'Saúde',
    selected: false,
    color: '#f12711',
    tag: 2,
  },
  {
    id: 5,
    title: 'Lógica',
    selected: false,
    color: '#AC4F88',
    tag: 2,
  },
  {
    id: 6,
    title: 'Tecnologia',
    selected: false,
    color: '#345D7A',
    tag: 2,
  },
];

export default function SignIn({navigation}) {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');

  useEffect(() => {
    setCategories(categoriesInit);
  }, []);

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
