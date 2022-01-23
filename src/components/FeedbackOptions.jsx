import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((opt) => {
      return (
        <button
          className={styles.button}
          key={opt}
          type="button"
          onClick={() => onLeaveFeedback(opt)}
        >
          {opt}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
