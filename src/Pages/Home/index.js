import React, { useState } from 'react';
import {
    MainContainer,
    CriterionsContainer,
    TitleCriterionsContainer,
    ThemesList,
    ThemeItem,
    ThemeName,
    ThemeInput,
    ThemeInputCheckbox,
    CriterionsList,
    CriterionItem,
    CriterionTitle,
    Criterion,
    RemoveButton,
    CountValue,
    AddButton,
    ContainerSumAllCountValues,
    SumAllCountValuesTitle,
    SumAllCountValues,
    CleanAllCountValues,
} from './styles';
import Nu from '../../assets/images/nu.jpeg';

function Home() {
    const [criterions, setCriterions] = useState([
        {
            id: 1,
            name: 'ortografia',
            value: 0,
            recurrent: false,
        },
        {
            id: 2,
            name: 'acentuação',
            value: 0,
            recurrent: false,
        },
        {
            id: 3,
            name: 'pontuação',
            value: 0,
            recurrent: false,
        },
        {
            id: 4,
            name: 'concordância',
            value: 0,
            recurrent: false,
        },
        {
            id: 5,
            name: 'crase',
            value: 0,
            recurrent: false,
        },
        {
            id: 6,
            name: 'construção frasal',
            value: 0,
            recurrent: false,
        },
        {
            id: 7,
            name: 'precisão lexical',
            value: 0,
            recurrent: false,
        },
        {
            id: 8,
            name: 'informalidade',
            value: 0,
            recurrent: false,
        },
        {
            id: 9,
            name: 'regência',
            value: 0,
            recurrent: false,
        },
        {
            id: 10,
            name: 'segmentação',
            value: 0,
            recurrent: false,
        },
        {
            id: 11,
            name: 'graves',
            value: 0,
            recurrent: false,
        },
    ]);

    const themes = [
        {
            name: 'Tema  1'
        },
        {
            name: 'Tema  2'
        },
        {
            name: 'Tema  3'
        },
    ];

    const addValue = (event) => {
        const newCriterions = criterions.map((criterion) => {
            if (criterion.id === parseInt(event.target.value)) {
                if(criterion.value === 4) {
                    return { ...criterion, value: criterion.value += 1, recurrent: true };
                }
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
                if(criterion.value === 5) {
                    return { ...criterion, value: criterion.value -= 1, recurrent: false };
                }
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
            return { ...criterion, value: criterion.value = 0, recurrent: false };
        });
        setCriterions(newCriterions);
    }
    return (
        <MainContainer>
            {
                criterions.reduce((acc, cc) => acc + cc.value, 0) < 69 &&
                <CriterionsContainer>
                <TitleCriterionsContainer>
                    Critérios de avaliação
                </TitleCriterionsContainer>
                <ThemesList>
                    {
                        themes.map(() =>

                            <ThemeItem>
                                <ThemeInput />
                                <ThemeInputCheckbox type="checkbox"/>
                            </ThemeItem>
                        )
                    }
                </ThemesList>
                <CriterionsList>
                    {
                        criterions.map((criterion) =>
                            <CriterionItem>
                                <CriterionTitle recurrent={criterion.recurrent}>
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
                <ContainerSumAllCountValues>
                    <SumAllCountValuesTitle>Total:</SumAllCountValuesTitle>
                    <SumAllCountValues>
                        {
                            criterions.reduce((acc, cc) => acc + cc.value, 0)
                        }
                    </SumAllCountValues>
                </ContainerSumAllCountValues>
                <CleanAllCountValues onClick={removeAllValue}>
                    Limpar tudo
                </CleanAllCountValues>
            </CriterionsContainer>
            }
            {
                 criterions.reduce((acc, cc) => acc + cc.value, 0) === 69 &&   
                <img src={Nu} />
            }
        </MainContainer>
    );
}

export default Home;
