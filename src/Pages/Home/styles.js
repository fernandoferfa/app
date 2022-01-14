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
    font-size: 30px;
    margin: 0px;
    margin-top:4px;
    text-align: center; 
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
    padding: 14px 0;
    width: 260px;
    &:nth-child(10) {
        border-bottom: 0px;
    }
`;

export const CriterionTitle = styled.p`
    
`;

export const Criterion = styled.li`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    width: 140px;
`;

export const RemoveButton = styled.button`
    background-color: #8257e5;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 35px;
    width: 35px;
`;

export const AddButton = styled.button`
    background-color: #04d361;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 35px;
    width: 35px;
`;

export const CountValue = styled.p`
    font-size: 22px;
    text-align: center;
    width: 50px;
`;


export const CleanAllCountValues = styled.button`
    background-color: #ffb612;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin: 24px auto;
    padding: 12px;
    width: 314px;
`;
