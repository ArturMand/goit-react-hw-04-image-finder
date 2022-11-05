import { ButtonLoad } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ updatePage }) => {
  return (
    <ButtonLoad type="button" onClick={updatePage}>
      More
    </ButtonLoad>
  );
};

export default Button;

Button.propTypes = {
  updatePage: PropTypes.func.isRequired,
};
