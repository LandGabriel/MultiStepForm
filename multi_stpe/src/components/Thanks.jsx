import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>One moment..</h2>
      <p>
        Your opinion is very important, you will soon receive a 10% discount
        coupon for your next purchase.
      </p>
      <p>To complete your evaluation, click the Submit button below.</p>
      <h3>Here is the summary of you {data.name}:</h3>
      <p className="review-data">
        <span>Product satisfaction:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comment:</span> {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
