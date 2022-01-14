import styled from 'styled-components';

export const MainContainer = styled.div`
`;

export const CriterionsContainer = styled.div`
    border-radius: 8px;
    box-shadow: 1px 1px 10px black;
    margin: 0 auto;
    margin-top: 12px;
    padding: 8px 16px;
    width: 314px;
`;

export const TitleCriterionsContainer = styled.h1`
    font-size: 16px;
    margin: 0px;
    margin-top:4px;
    text-align: center; 
`;

export const ThemesList = styled.ul`
    margin: 10px auto 0;
    padding: 0;
    width: 260px;
`;

export const ThemeItem = styled.li`
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 6px 0;
    width: 100%;
`;

export const ThemeName = styled.p`

`;

export const ThemeInput = styled.input`
    border: none;
    border: 2px solid;
    border-radius: 5px;
    padding: 4px 6px;
    width: 200px;
`;

export const ThemeInputCheckbox = styled.input`
    
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(2);
    padding: 10px;
`;

export const CriterionsList = styled.ul`
    margin: 0 auto;
    padding: 0;
    width: fit-content;
`;

export const CriterionItem = styled.li`
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    width: 260px;
`;

export const CriterionTitle = styled.p`
    color: ${props => props.recurrent ? 'red': 'black'};
    font-size: 14px;
`;

export const Criterion = styled.li`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    width: 115px;
`;

export const RemoveButton = styled.button`
    background-color: #8257e5;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 28px;
    width: 28px;
`;

export const AddButton = styled.button`
    background-color: #04d361;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 28px;
    width: 28px;
`;

export const CountValue = styled.p`
    font-size: 16px;
    text-align: center;
    width: 50px;
`;

export const ContainerSumAllCountValues = styled.div`
    display: flex;
    margin: 0 auto;
    width: 260px;
`;

export const SumAllCountValuesTitle = styled.p`
    margin-right: 12px
`;

export const SumAllCountValues = styled.p`
    
`;


export const CleanAllCountValues = styled.button`
    background-color: #ffb612;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    display: block;
    margin: 24px auto;
    padding: 8px;
    width: 314px;
`;
