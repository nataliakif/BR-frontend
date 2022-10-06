import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({
  className,
  type = 'button',
  text,
  onClick,
  disabled = false,
  tabIndex,
  autoFocus,
}) => {
  return (
    <button
      className={`${s[className]}`}
      type={type}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      tabIndex={tabIndex}
      autoFocus={autoFocus}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.oneOf(['main', 'transparent']),
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
