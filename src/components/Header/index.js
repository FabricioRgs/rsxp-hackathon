import React from 'react';
import PropTypes from 'prop-types';

import {Container, IconRight, Title, ReturnButtom} from './styles';

export default function Header({navigation, action}) {
  return (
    <Container>
      <Title>RS / XP</Title>
      <ReturnButtom onPress={() => (action ? action() : navigation())}>
        <IconRight />
      </ReturnButtom>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.func.isRequired,
  action: PropTypes.func,
};

Header.defaultProps = {
  action: null,
};
