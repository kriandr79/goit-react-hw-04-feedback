import React, { useState } from 'react';
import Statistics from './Statistic/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  const handleFeedback = option => {

    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
 
  };

  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const totalFeedbacks = countTotalFeedback();
  const positiveFeedbackPercentag =
    countPositiveFeedbackPercentage().toFixed(2);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positiveFeedbackPercentag}
          ></Statistics>
        </Section>
      )}
    </>
  );
}

// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   };

//   handleFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = ['good', 'neutral', 'bad'];
//     const total = good + neutral + bad;
//     const totalFeedbacks = this.countTotalFeedback();
//     const positiveFeedbackPercentag = this.countPositiveFeedbackPercentage().toFixed(2);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleFeedback}
//           ></FeedbackOptions>
//         </Section>

//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedbacks}
//               positivePercentage={positiveFeedbackPercentag}
//             ></Statistics>
//           </Section>
//         )}
//       </>
//     );
//   }
// }
