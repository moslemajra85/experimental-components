import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';
import { IoIosCloseCircle } from 'react-icons/io';

const CarList = () => {
  let { carsList, searchTerm } = useSelector((state) => state.cars);
  const { name } = useSelector((state) => state.carForm);

  carsList = carsList.filter((car) => {
    return car.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const dispatch = useDispatch();
  const handleRemoveCar = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = carsList.map((car) => {
    const highlight =
      car.name.toLowerCase() === name.toLowerCase() ? 'highlight' : '';

    return (
      <li className={` car box ${highlight}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <IoIosCloseCircle
          onClick={() => handleRemoveCar(car.id)}
          color="red"
          cursor="pointer"
          size={30}
        />
      </li>
    );
  });
  return (
    <div>
      <ul className="menu-list">{renderedCars}</ul>
    </div>
  );
};

export default CarList;
