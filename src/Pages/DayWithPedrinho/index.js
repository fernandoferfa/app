import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import {
  BtnCalculate,
  BtnsNavigation,
  Container,
  CorrectionsButton,
  DatePickerStyle,
  ErrorMsg,
  HomeButton,
  Label,
  Result,
  Title,
  TitleResult,
} from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import { Corrections } from '../Corrections';

export function DayWithPedrinho() {
  const [startDateWith, setStartDateWith] = useState(new Date());
  const [consultDateWith, setConsultDateWith] = useState(new Date());
  const [resultDate, setResultDate] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  registerLocale('pt-BR', ptBR);

  const calculationFromTheWeekOnPredinho = (
    dayOfWeekConsultDateWith,
    numberOfWeek
  ) => {
    if (
      numberOfWeek % 2 === 0 &&
      (dayOfWeekConsultDateWith === 2 || dayOfWeekConsultDateWith === 4)
    ) {
      setResultDate('Pedrinho estará com o progenitor');
    } else if (
      numberOfWeek % 2 !== 0 &&
      (dayOfWeekConsultDateWith === 1 ||
        dayOfWeekConsultDateWith === 3 ||
        dayOfWeekConsultDateWith === 5 ||
        dayOfWeekConsultDateWith === 6 ||
        dayOfWeekConsultDateWith === 0)
    ) {
      setResultDate('Pedrinho estará com o progenitor');
    } else if (
      numberOfWeek % 2 !== 0 &&
      (dayOfWeekConsultDateWith === 2 || dayOfWeekConsultDateWith === 4)
    ) {
      setResultDate('Pedrinho estará com a maravilhosa mãe dele');
    } else if (
      numberOfWeek % 2 === 0 &&
      (dayOfWeekConsultDateWith === 1 ||
        dayOfWeekConsultDateWith === 3 ||
        dayOfWeekConsultDateWith === 5 ||
        dayOfWeekConsultDateWith === 6 ||
        dayOfWeekConsultDateWith === 0)
    ) {
      setResultDate('Pedrinho estará com a maravilhosa mãe dele');
    }
  };

  const calculationFromTheWeekOffPredinho = (
    dayOfWeekConsultDateWith,
    numberOfWeek
  ) => {
    if (
      numberOfWeek % 2 === 0 &&
      (dayOfWeekConsultDateWith === 2 || dayOfWeekConsultDateWith === 4)
    ) {
      setResultDate('Pedrinho estará com a maravilhosa mãe dele');
    } else if (
      numberOfWeek % 2 !== 0 &&
      (dayOfWeekConsultDateWith === 1 ||
        dayOfWeekConsultDateWith === 3 ||
        dayOfWeekConsultDateWith === 5 ||
        dayOfWeekConsultDateWith === 6 ||
        dayOfWeekConsultDateWith === 0)
    ) {
      setResultDate('Pedrinho estará com a maravilhosa mãe dele');
    } else if (
      numberOfWeek % 2 !== 0 &&
      (dayOfWeekConsultDateWith === 2 || dayOfWeekConsultDateWith === 4)
    ) {
      setResultDate('Pedrinho estará com o progenitor');
    } else if (
      numberOfWeek % 2 === 0 &&
      (dayOfWeekConsultDateWith === 1 ||
        dayOfWeekConsultDateWith === 3 ||
        dayOfWeekConsultDateWith === 5 ||
        dayOfWeekConsultDateWith === 6 ||
        dayOfWeekConsultDateWith === 0)
    ) {
      setResultDate('Pedrinho estará com o progenitor');
    }
  };

  const dayCalculatorWithPedrinho = (
    dayOfWeekStartDateWith,
    dayOfWeekConsultDateWith,
    numberOfWeek
  ) => {
    if (dayOfWeekStartDateWith === 2 || dayOfWeekStartDateWith === 4) {
      calculationFromTheWeekOffPredinho(dayOfWeekConsultDateWith, numberOfWeek);
    } else {
      calculationFromTheWeekOnPredinho(dayOfWeekConsultDateWith, numberOfWeek);
    }
  };

  const handleClickPedrinhoWithDayResult = () => {
    if (startDateWith > consultDateWith) {
      setErrorMsg(
        'A próxima data em que estará com o Pedrinho não pode ser maior do que a data em que deseja saber se estará com ele.'
      );
      setResultDate('');

      return;
    } else {
      setErrorMsg('');
    }

    const time = Math.abs(consultDateWith - startDateWith);
    const diffDays = Math.ceil(time / (1000 * 60 * 60 * 24));

    let subtractNumberOfDays;
    let numberOfWeek;
    const dayOfWeekStartDateWith = startDateWith.getDay();
    const dayOfWeekConsultDateWith = consultDateWith.getDay();

    if (dayOfWeekStartDateWith === 0) {
      subtractNumberOfDays = 1;
      numberOfWeek = Math.floor((diffDays - subtractNumberOfDays) / 7) + 1;
    } else if (dayOfWeekStartDateWith === 1) {
      subtractNumberOfDays = 0;
      numberOfWeek = Math.floor((diffDays - subtractNumberOfDays) / 7);
    } else if (8 - dayOfWeekStartDateWith > diffDays) {
      subtractNumberOfDays = 0;
      numberOfWeek = 0;
    } else {
      subtractNumberOfDays = 8 - dayOfWeekStartDateWith;
      numberOfWeek = Math.floor((diffDays - subtractNumberOfDays) / 7);
    }

    dayCalculatorWithPedrinho(
      dayOfWeekStartDateWith,
      dayOfWeekConsultDateWith,
      numberOfWeek
    );
  };

  return (
    <Container>
      <Title>Dia com Pedrinho</Title>
      <Label>Informe a próxima data em que estará com o Pedrinho:</Label>
      <DatePickerStyle
        selected={startDateWith}
        onChange={(date) => setStartDateWith(date)}
        dateFormat="P"
        locale="pt-BR"
      />
      <Label>Informe a data que deseja saber se estará com o Pedrinho:</Label>
      <DatePickerStyle
        selected={consultDateWith}
        onChange={(date) => setConsultDateWith(date)}
        dateFormat="P"
        locale="pt-BR"
      />
      <BtnCalculate onClick={handleClickPedrinhoWithDayResult}>
        Calcular
      </BtnCalculate>
      <ErrorMsg>{errorMsg}</ErrorMsg>
      <TitleResult>Com quem o Pedrinho vai estar?</TitleResult>
      <Result>{resultDate}</Result>
      <BtnsNavigation>
        <HomeButton to="/">Início</HomeButton>
        <CorrectionsButton to="/corrections">
          Critérios de avaliação
        </CorrectionsButton>
      </BtnsNavigation>
    </Container>
  );
}
