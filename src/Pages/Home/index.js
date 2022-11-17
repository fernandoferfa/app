import React from 'react';
import {
  BoxBtnsNavigations,
  Container,
  CorrectionsButton,
  WithDayPedrinhoButton,
} from './styles';

export function Home() {
  return (
    <Container>
      <BoxBtnsNavigations>
        <CorrectionsButton to="corrections">
          Critérios de avaliação
        </CorrectionsButton>{' '}
        <WithDayPedrinhoButton to="day-with-pedrinho">
          Dia com o Pedrinho
        </WithDayPedrinhoButton>{' '}
      </BoxBtnsNavigations>
    </Container>
  );
}
