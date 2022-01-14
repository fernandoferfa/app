import styled from 'styled-components';

export const MainContainer = styled.div`
`;

export const CriterionsContainer = styled.div`
    border: 1px solid red;
    margin: 0 auto;
    padding: 8px 16px;
    width: 314px;
`;

export const TitleCriterionsContainer = styled.h1`
    font-size: 30px;
    margin: 0px;
    margin-top: 12px;
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
    padding: 16px 0;
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
    height: 35px;
    width: 35px;
`;

export const AddButton = styled.button`
    height: 35px;
    width: 35px;
`;

export const CountValue = styled.p`
    font-size: 22px;
    text-align: center;
    width: 50px;
`;


export const CleanAllCountValues = styled.button`
    margin: 24px auto;
    display: block;
    width: 314px;
`;
