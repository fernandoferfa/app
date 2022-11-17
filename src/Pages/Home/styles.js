import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const BoxBtnsNavigations = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 350px;
`;

export const CorrectionsButton = styled(Link)`
  background-color: #012676;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 32px;
  padding: 10px;
  text-align: center;
  width: 100%;
  transition: filter 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &&& {
    text-decoration: none;
  }
`;

export const WithDayPedrinhoButton = styled(Link)`
  background-color: #ea8300;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  width: 100%;
  transition: filter 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &&& {
    text-decoration: none;
  }
`;
