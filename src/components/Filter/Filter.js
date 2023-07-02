import PropTypes from 'prop-types';
import s from './Filter.css';

export function Filter({ filter, onFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};
