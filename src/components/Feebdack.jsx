import React from "react";
import { Statistics, Section, FeedbackOptions, Notification } from "./";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  whenClicked = (opt) => {
    this.setState((prevState) => ({
      [opt]: prevState[opt] + 1,
    }));
  };

  thisStats = (opt) => {};

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100);
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.whenClicked}
          />
        </Section>
        <Section title={"Statistics"}>
          {good || bad || neutral ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positive={positiveFeedback}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </div>
    );
  }
}
