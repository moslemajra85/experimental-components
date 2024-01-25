import { useSelector } from 'react-redux';

const CarValue = () => {
  let { searchTerm, carsList } = useSelector((state) => state.cars);

  const total = carsList
    .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <div className="cost box columns">
      <span className="column">Total Cost: </span>
      <span className="column">${total}</span>
    </div>
  );
};

export default CarValue;
