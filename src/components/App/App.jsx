import { Component } from 'react';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (total, value) => total + value,
      0
    );

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const goodPercentage = (good / totalFeedback) * 100;

    return Math.round(goodPercentage);
  };

  onLeaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
