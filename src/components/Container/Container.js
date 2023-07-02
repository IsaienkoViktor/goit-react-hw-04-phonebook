import PropTypes from 'prop-types';
import s from './Container.css';

export function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
