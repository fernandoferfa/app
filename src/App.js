import { Route, Routes } from 'react-router-dom';
import { Corrections } from './Pages/Corrections';
import { DayWithPedrinho } from './Pages/DayWithPedrinho';
import { Home } from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Corrections />} path="/corrections" />
      <Route element={<DayWithPedrinho />} path="/day-with-pedrinho" />
    </Routes>
  );
}

export default App;
