import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export function ContactItem({ id, name, number, onDelete }) {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item} key={id}>
          <span className={s.info}>{name}:</span>
          <span className={s.info}>{number}</span>
          <button className={s.btn} type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      </ul>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
