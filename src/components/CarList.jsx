import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';
import { IoIosCloseCircle } from 'react-icons/io';

const CarList = () => {
  const { carsList } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleRemoveCar = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = carsList.map((car) => {
    return (
      <li className="car" key={car.id}>
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
