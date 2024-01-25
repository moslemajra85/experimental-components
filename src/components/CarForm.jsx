import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';
import { addCar } from '../store';

const CarForm = () => {
  const { name, cost } = useSelector((state) => state.carForm);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(Number(event.target.value)));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="form-panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form className="box" onSubmit={handleFormSubmit}>
        <div className="columns is-vcentered">
          <div className="field-group column">
            <div className="field">
              <label className="label">Name</label>
              <input
                onChange={handleNameChange}
                value={name}
                type="text"
                className="input"
                placeholder="Car name"
              />
            </div>
          </div>
          <div className="field-group column">
            <div className="field">
              <label className="label">Car Value</label>
              <input
                onChange={handleCostChange}
                type="number"
                value={cost || ''}
                className="input"
                placeholder="Add cost"
              />
            </div>
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
