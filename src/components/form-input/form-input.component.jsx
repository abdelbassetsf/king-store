import './form-input.styles.scss';

const FormInput = ({ label, htmlFor, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
          htmlFor={htmlFor}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;