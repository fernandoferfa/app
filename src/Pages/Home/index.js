import React, { useState } from 'react';
import {
    MainContainer,
    CriterionsContainer,
    TitleCriterionsContainer,
    CriterionsList,
    CriterionItem,
    CriterionTitle,
    Criterion,
    RemoveButton,
    CountValue,
    AddButton,
    CleanAllCountValues,
} from './styles';

function Home() {
    const [criterions, setCriterions] = useState([
        {
            id: 1,
            name: 'critério 1',
            value: 0
        },
        {
            id: 2,
            name: 'critério 2',
            value: 0
        },
        {
            id: 3,
            name: 'critério 3',
            value: 0
        },
        {
            id: 4,
            name: 'critério 4',
            value: 0
        },
        {
            id: 5,
            name: 'critério 5',
            value: 0
        },
        {
            id: 6,
            name: 'critério 6',
            value: 0
        },
        {
            id: 7,
            name: 'critério 7',
            value: 0
        },
        {
            id: 8,
            name: 'critério 8',
            value: 0
        },
        {
            id: 9,
            name: 'critério 9',
            value: 0
        },
        {
            id: 10,
            name: 'critério 10',
            value: 0
        },
    ]);

    const addValue = (event) => {
        const newCriterions = criterions.map((criterion) => {
            if (criterion.id === parseInt(event.target.value)) {
                return { ...criterion, value: criterion.value += 1 };
            } else {

                return { ...criterion, value: criterion.value = criterion.value };
            }
        }
        );
        setCriterions(newCriterions);
    };

    const removeValue = (event) => {
        const newCriterions = criterions.map((criterion) => {
            if (criterion.id === parseInt(event.target.value) && criterion.value > 0) {
                return { ...criterion, value: criterion.value -= 1 };
            } else {

                return { ...criterion, value: criterion.value = criterion.value };
            }
        }
        );
        setCriterions(newCriterions);
    };

    const removeAllValue = () => {
        const newCriterions = criterions.map((criterion) => {
            return { ...criterion, value: criterion.value = 0 };
        });
        setCriterions(newCriterions);
    }
    return (
        <MainContainer>
            <CriterionsContainer>
                <TitleCriterionsContainer>
                    Critérios de avaliação
                </TitleCriterionsContainer>
                <CriterionsList>
                    {
                        criterions.map((criterion) =>
                            <CriterionItem>
                                <CriterionTitle>
                                    {criterion.name}
                                </CriterionTitle>
                                <Criterion>
                                    <RemoveButton
                                        value={criterion.id}
                                        onClick={removeValue}
                                    >-</RemoveButton>
                                    <CountValue>{criterion.value}</CountValue>
                                    <AddButton
                                        value={criterion.id}
                                        onClick={addValue}
                                    >+</AddButton>
                                </Criterion>
                            </CriterionItem>
                        )
                    }
                </CriterionsList>
                <CleanAllCountValues onClick={removeAllValue}>
                    Limpar tudo
                </CleanAllCountValues>
            </CriterionsContainer>
        </MainContainer>
    );
}

export default Home;
