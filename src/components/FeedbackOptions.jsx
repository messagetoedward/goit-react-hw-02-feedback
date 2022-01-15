import PropTypes from "prop-types";

export const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositive,
}) => (
  <>
    <button
      type="button"
      onClick={() => {
        onGood();
        onTotal();
        onPositive();
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        onNeutral();
        onTotal();
        onPositive();
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        onBad();
        onTotal();
        onPositive();
      }}
    >
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
  onTotal: PropTypes.func.isRequired,
  onPositive: PropTypes.func.isRequired,
};
