import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

export function ContactFilter({ filter, onFilter }) {
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

ContactFilter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};
