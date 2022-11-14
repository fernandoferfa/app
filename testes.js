const themes = [
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
];

const themeName = 'theme3';

function changeValueTest(name) {
  const newThemes = themes.map((theme) => {
    console.log(theme);
    if (name === theme.name) {
      return { ...theme, value: (theme.value = 'valor mudado') };
    }
    return { ...theme };
  });
  console.log(newThemes);
}

changeValueTest('theme3');
