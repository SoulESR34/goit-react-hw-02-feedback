import { Section } from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statics from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage() {
    const feedbackValues = Object.values(this.state);
    const totalValues = feedbackValues.reduce(
      (total, opinions) => opinions + total,
      0
    );
    const postivePercentage = (this.state.good / totalValues) * 100;
    return totalValues === 0 ? 0 : Number(postivePercentage.toFixed(0));
  }

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);
    return feedbackValues.reduce((total, opinions) => opinions + total, 0);
  };

  handleFeedBack = e => {
    const quality = e.target.name;
    this.setState({ [quality]: this.state[quality] + 1 });
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleFeedBack}
        ></FeedbackOptions>
        {this.countTotalFeedback() !== 0 ? (
          <Statics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statics>
        ) : (
          <h2>No feedback given</h2>
        )}
      </Section>
    );
  }
}
