import './styles.css';
import StarRating from '../StarRating';

export const SearchOption = ({
  innerProps,
  data: { title, genre, rating },
}) => (
  <div className="search-option">
    <div>
      <p className="search-option-movie">{title}</p>
      <StarRating rating={rating} />
    </div>
    <p>{genre}</p>
  </div>
);
