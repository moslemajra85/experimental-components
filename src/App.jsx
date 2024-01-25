import CarForm from './components/CarForm';
import CarValue from './components/CarValue';
import CarSearch from './components/CarSearch';
import CarList from './components/CarList';

const App = () => {
  return (
    <div className='container is-fluid'>
      <CarForm />
      <br />
      <CarSearch />
      <br />
      <div className='mt-3'>
        <CarList />
      </div>
      <br />
      <CarValue />
    </div>
  );
};

export default App;
