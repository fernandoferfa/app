import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 12px;
  padding: 32px;

  @media (max-width: 600px) {
    box-shadow: none;
  }
`;

export const Title = styled.div`
  color: #012676;
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
`;

export const Label = styled.p`
  color: #ea8300;
  margin: 0;
  margin-bottom: 8px;
`;

export const DatePickerStyle = styled(DatePicker)`
  border: 2px solid;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px 10px;
`;

export const BtnCalculate = styled.button`
  background-color: #008cfe;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  outline: none;
  padding: 10px;
  transition: filter 0.3s;
  width: 100%;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const ErrorMsg = styled.p`
  color: red;
`;

export const TitleResult = styled.p`
  color: #ea8300;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-top: 32px;
  text-align: center;
`;

export const Result = styled.p`
  color: #008cfe;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-top: 8px;
  text-align: center;
`;

export const BtnsNavigation = styled.div`
  align-items: center;
  text-decoration: none;

  display: flex;

  flex-direction: column;
  margin-top: 80px;
  width: 100%;
`;

export const HomeButton = styled(Link)`
  background-color: #012676;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 10px;
  text-align: center;
  width: 60%;
  transition: filter 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &&& {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CorrectionsButton = styled(Link)`
  background-color: #ea8300;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  width: 60%;
  transition: filter 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &&& {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
