import { useState } from 'react';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const goodPercentage = (good / totalFeedback) * 100;

    return Math.round(goodPercentage);
  };

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          positivePercentage={countPositiveFeedbackPercentage()}
          total={countTotalFeedback()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};
