interface Props {
  error?: string;
  type?: string;
  placeholder: string;
  fullWidth?: boolean;
  onChange: (value: string) => void;
}

const InputField = ({ error, type = "text", placeholder, fullWidth, onChange }: Props) => {
  return (
    <div className={`${fullWidth ? "w-full" : "lg:w-[48.806%] sm:w-[47%] w-full"}`}>
      <label htmlFor={placeholder} className="inputfields_basiccss">
        <input
          autoComplete="off"
          id={placeholder}
          name={placeholder}
          type={type}
          placeholder={placeholder}
          className="input"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
