import React from "react";
import { Statistics, Section, FeedbackOptions, Notification } from "./";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  clickedGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  clickedNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  clickedBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positive: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onGood={this.clickedGood}
            onNeutral={this.clickedNeutral}
            onBad={this.clickedBad}
            onTotal={this.countTotalFeedback}
            onPositive={this.countPositiveFeedbackPercentage}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positive={this.state.positive}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </div>
    );
  }
}
