import React, { useEffect, useState } from 'react';
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
  NudeImageContainer,
} from './styles';
import Nu from '../../assets/images/nu.jpeg';
import Nu2 from '../../assets/images/nu2.jpeg';
import { addCountAttempt } from '../../services/fabi.services';

function Home() {
  const [showNude, setShowNude] = useState(false);
  const [themes, setThemes] = useState([
    {
      id: 1,
      name: 'theme1',
      value: '',
      checked: false,
    },
    {
      id: 2,
      name: 'theme2',
      value: '',
      checked: false,
    },
    {
      id: 3,
      name: 'theme3',
      value: '',
      checked: false,
    },
  ]);

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

  useEffect(() => {
    const criterionsLocalStorage = localStorage.getItem('criterions');
    const themesLocalStorage = localStorage.getItem('themes');
    if (criterionsLocalStorage) {
      setCriterions(JSON.parse(criterionsLocalStorage));
    }
    if (themesLocalStorage) {
      setThemes(JSON.parse(themesLocalStorage));
    }
  }, []);

  const addTheme = (event) => {
    const newThemes = themes.map((theme) => {
      if (event.target.name === theme.name) {
        return { ...theme, value: (theme.value = event.target.value) };
      }
      return { ...theme };
    });
    localStorage.setItem('themes', JSON.stringify(newThemes));
    setThemes(newThemes);
  };

  const handleChangeCheckdTheme = (event) => {
    const newThemes = themes.map((theme) => {
      if (event.target.name === theme.name) {
        return { ...theme, checked: (theme.checked = !theme.checked) };
      }
      return { ...theme };
    });
    localStorage.setItem('themes', JSON.stringify(newThemes));
    setThemes(newThemes);
    console.log({ name: event.target.name });
  };

  const addValue = async (event) => {
    const total = criterions.reduce((acc, cc) => acc + cc.value, 0);
    if (total === 3) {
      setShowNude(true);
      console.log('certo');
      try {
        await addCountAttempt();
      } catch (error) {
        console.log('deu ruim');
      }
    }

    const newCriterions = criterions.map((criterion) => {
      if (criterion.id === parseInt(event.target.value)) {
        if (criterion.value === 4) {
          return {
            ...criterion,
            value: (criterion.value += 1),
            recurrent: true,
          };
        }
        return { ...criterion, value: (criterion.value += 1) };
      } else {
        return { ...criterion, value: (criterion.value = criterion.value) };
      }
    });
    localStorage.setItem('criterions', JSON.stringify(newCriterions));
    setCriterions(newCriterions);
  };

  const removeValue = (event) => {
    const newCriterions = criterions.map((criterion) => {
      if (
        criterion.id === parseInt(event.target.value) &&
        criterion.value > 0
      ) {
        if (criterion.value === 5) {
          return {
            ...criterion,
            value: (criterion.value -= 1),
            recurrent: false,
          };
        }
        return { ...criterion, value: (criterion.value -= 1) };
      } else {
        return { ...criterion, value: (criterion.value = criterion.value) };
      }
    });
    setCriterions(newCriterions);
  };

  const removeAllValue = () => {
    const newCriterions = criterions.map((criterion) => {
      return { ...criterion, value: (criterion.value = 0), recurrent: false };
    });
    const newThemes = themes.map((theme) => {
      return { ...theme, value: (theme.value = ''), checked: false };
    });
    setThemes(newThemes);
    setCriterions(newCriterions);
    localStorage.removeItem('criterions');
    localStorage.removeItem('themes');
  };
  return (
    <MainContainer>
      <CriterionsContainer>
        <TitleCriterionsContainer>
          Critérios de avaliação
        </TitleCriterionsContainer>
        <ThemesList>
          {themes.map((theme) => (
            <ThemeItem>
              <ThemeInput
                value={theme.value}
                name={theme.name}
                onChange={addTheme}
              />
              <ThemeInputCheckbox
                type="checkbox"
                checked={theme.checked}
                name={theme.name}
                onChange={handleChangeCheckdTheme}
              />
            </ThemeItem>
          ))}
        </ThemesList>
        <CriterionsList>
          {criterions.map((criterion) => (
            <CriterionItem>
              <CriterionTitle recurrent={criterion.recurrent}>
                {criterion.name}
              </CriterionTitle>
              <Criterion>
                <RemoveButton value={criterion.id} onClick={removeValue}>
                  -
                </RemoveButton>
                <CountValue>{criterion.value}</CountValue>
                <AddButton value={criterion.id} onClick={addValue}>
                  +
                </AddButton>
              </Criterion>
            </CriterionItem>
          ))}
        </CriterionsList>
        <ContainerSumAllCountValues>
          <SumAllCountValuesTitle>Total:</SumAllCountValuesTitle>
          <SumAllCountValues>
            {criterions.reduce((acc, cc) => acc + cc.value, 0)}
          </SumAllCountValues>
        </ContainerSumAllCountValues>
        <CleanAllCountValues onClick={removeAllValue}>
          Limpar tudo
        </CleanAllCountValues>
      </CriterionsContainer>
      <NudeImageContainer>{showNude && <img src={Nu2} />}</NudeImageContainer>
    </MainContainer>
  );
}

export default Home;
