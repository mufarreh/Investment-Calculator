export default function TableData({
  year,
  interest,
  valueEndOfYear,
  annualInvestment = 0,
  formatter,
  initialInvestment,
}) {
  const totalInterest =
    valueEndOfYear - year * annualInvestment - initialInvestment;
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
    </tr>
  );
}
