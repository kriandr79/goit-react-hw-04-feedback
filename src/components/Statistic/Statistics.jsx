export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li key="good">Good: {good}</li>
      <li key="neutral">Neutral: {neutral}</li>
      <li key="bad">Bad: {bad}</li>
      <li key="total">Total: {total}</li>
      <li key="positivePercentage">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
