import './styles.css';

export const GenreOptions = ({ innerProps, isSelected, value }) => (
  <div className="genre-option">
    <input
      type="checkbox"
      onChange={(e) => {}}
      {...innerProps}
      checked={isSelected}
      className="genre-checkbox"
    />
    <p className="genre-label">{value}</p>
  </div>
);
