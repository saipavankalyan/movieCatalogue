import clsx from 'clsx';
import Rating from 'react-rating';

const StarRating = ({ rating, size = 'lg' }) => (
  <Rating
    className={clsx('search-option-rating', `rating-${size}`)}
    fractions={10}
    stop={10}
    initialRating={rating}
    emptySymbol="fa fa-star-o fa-2x"
    fullSymbol="fa fa-star fa-2x"
    readonly
  />
);

export default StarRating;
