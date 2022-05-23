import { FormGroup, Input, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;
