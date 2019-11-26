import React, {useRef, useState, useEffect} from 'react';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  TxtCompany,
  BtClick,
} from './styles';
import Background from '~/components/Background';

export default function SignIn() {
  const [name, setName] = useState('');

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Form>
          <BtClick>
            <TxtCompany>RS - XP</TxtCompany>
          </BtClick>
          <FormInput
            icon="person"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholder="Digite seu login"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={name}
            onChangeText={setName}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
