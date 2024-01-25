import { LiaSearchSolid } from 'react-icons/lia';
import { changeSearchTerm } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const CarSearch = () => {
  const { searchTerm } = useSelector((state) => state.carForm);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="field">
      <label className="label">Search Car</label>
      <div className="control has-icons-left ">
        <input
          onChange={handleSearchChange}
          className="input"
          value={searchTerm}
          type="text"
          placeholder="Search..."
        />
        <span className="icon is-small is-left">
          <LiaSearchSolid color="purple" />
        </span>
      </div>
    </div>
  );
};

export default CarSearch;
