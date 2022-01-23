import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, total, positive }) => (
  <>
    <p>
      Good:<span className={styles.span}>{good}</span>
    </p>
    <p>
      Neutral:<span className={styles.span}>{neutral}</span>
    </p>
    <p>
      Bad:<span className={styles.span}>{bad}</span>
    </p>
    <p>
      Total:<span className={styles.span}>{total}</span>
    </p>
    <p>
      Positive feedback:<span className={styles.span}>{positive}%</span>
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
