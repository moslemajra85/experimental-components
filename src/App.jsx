import CarForm from './components/CarForm';
import CarValue from './components/CarValue';
import CarSearch from './components/CarSearch';
import CarList from './components/CarList';

const App = () => {
  return (
    <div>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue /> 
    </div>
  );
};

export default App;
