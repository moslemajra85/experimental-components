import { LiaSearchSolid } from 'react-icons/lia';

const CarSearch = () => {
  return (
    <div className="field">
      <label className="label">Search Car</label>
      <div className="control has-icons-left ">
        <input className="input" type="text" placeholder="Search..." />
        <span className="icon is-small is-left">
          <LiaSearchSolid color="purple" />
        </span>
      </div>
    </div>
  );
};

export default CarSearch;
