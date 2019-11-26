import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  TxtCompany,
  BtClick,
  List,
  Item,
  ItemEmpty,
  Touch,
  TxtOption,
} from './styles';
import Background from '~/components/Background';

const categoriesInit = [
  {
    id: 1,
    title: 'História',
    selected: false,
    tag: 1,
  },
  {
    id: 2,
    title: 'Jogos',
    selected: false,
    tag: 2,
  },
  {
    id: 3,
    title: 'Negócios',
    selected: false,
    tag: 1,
  },
  {
    id: 4,
    title: 'Enteterimento',
    selected: false,
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
        <StatusBar barStyle="light-content" />
        <Form>
          <>
            <BtClick>
              <TxtCompany>RS - XP</TxtCompany>
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
              renderItem={({item}) => {
                if (item.empty) {
                  return <ItemEmpty />;
                }
                return (
                  <Item>
                    <Touch
                      selected={item.selected}
                      tag={item.tag}
                      onPress={() => handleOption(item)}>
                      <TxtOption>{item.title}</TxtOption>
                    </Touch>
                  </Item>
                );
              }}
            />
          </>
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

console.disableYellowBox = false;
