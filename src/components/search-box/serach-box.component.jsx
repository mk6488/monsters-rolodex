import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onChangeHandler } = this.props;

// return (
//   <div>
//     <input
//       className={`search-box ${className}`}
//       type="search"
//       placeholder={placeholder}
//       onChange={onChangeHandler}
//     />
//   </div>
// );
//   }
// }

export default SearchBox;
