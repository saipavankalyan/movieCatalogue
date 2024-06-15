import './styles.css';
import StarRating from '../StarRating';

export const RatingOption = ({ innerProps, isSelected, value }) => (
  <div className="rating-option">
    <input
      type="checkbox"
      onChange={(e) => {}}
      {...innerProps}
      checked={isSelected}
      className="rating-checkbox"
    />
    {value > 0 && <StarRating rating={value} />}
    {parseInt(value) === 0 && <p className="any-rating-text">Any Rating</p>}
  </div>
);
