import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../src/redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filters.status);
  return (
    <div className='search-input'>
      <label htmlFor=''>Search by name</label>
      <input
        type='text'
        value={searchValue}
        onChange={(e) => dispatch(selectNameFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
