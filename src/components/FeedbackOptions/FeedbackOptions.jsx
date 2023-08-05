import PropTypes from 'prop-types';
import {
  OptionsList,
  OptionItem,
  OptionButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(value => (
        <OptionItem key={value}>
          <OptionButton
            onClick={() => {
              onLeaveFeedback(value);
            }}
          >
            {value}
          </OptionButton>
        </OptionItem>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
