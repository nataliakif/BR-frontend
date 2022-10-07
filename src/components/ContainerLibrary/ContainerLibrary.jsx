import PropTypes from 'prop-types';
import s from './ContainerLibrary.module.css';

const ContainerLibrary = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

ContainerLibrary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerLibrary;
