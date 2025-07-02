import styles from "./Feedback.module.css";

export default function Feedback(props) {
  const { good, bad, neutral, total } = props;
  return (
    <ul className={styles.container}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {Math.round((good / total) * 100)}%</li>
    </ul>
  );
}
