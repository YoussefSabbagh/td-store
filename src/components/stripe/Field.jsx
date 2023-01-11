export const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="flex flex-col mb-6">
    <label htmlFor={id} className="font-medium  ">
      {label}
    </label>
    <input
      className="border-0 border-b-4 border-primary-500"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);
