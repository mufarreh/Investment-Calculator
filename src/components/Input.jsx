export default function Input({ children, label, onChange, inputData }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        value={inputData[children]}
        onChange={(event) => onChange(children, event.target.value)}
        required
      ></input>
    </p>
  );
}
