import styles from "./Options.module.css";

export default function Options(props) {
  const { shouldShowReset, updateFeedback, resetFeedback } = props;
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {shouldShowReset && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
