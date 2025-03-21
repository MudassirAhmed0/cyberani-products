interface Props {
  error?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const TextAreaField = ({ error, placeholder, onChange }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={placeholder} className="inputfields_basiccss lg:!h-[6.52777777778vw] !h-[94px] lg:py-sp18 py-[18px] !items-start">
        <textarea
          autoComplete="off"
          id={placeholder}
          name={placeholder}
          placeholder={placeholder}
          className="input resize-none"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextAreaField;
