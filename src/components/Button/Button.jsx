import { ButtonLoad } from "./Button.styled";

const Button = ({ updatePage }) => {
    return (
      <ButtonLoad  type="button" onClick={updatePage}>
        More
      </ButtonLoad>
    );
  };
  
  export default Button;