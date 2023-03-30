import "../header-component/header.style.css";
const Header = () => {
  // console.log(data);
  // const copyData = [...data];
  // console.log(copyData);
  // const [initialDataValue, setInitialDataValue] = useState(playerData);
  // function handleClick() {
  //   alert("You clicked me!");
  // }

  return (
    <div className="title">
      <header className="header-container">
        <h2 className="heading">Players</h2>
        <form className="filter-container">
          <input className="input-tag" placeholder="Search" />
          <button className="search-icon icons" type="submit">
            <i className="fa-sharp fa-solid fa-magnifying-glass-plus"></i>
          </button>

          <button className="sort-icon icons">
            <i className="fa-solid fa-sort"></i>
          </button>
        </form>
      </header>
    </div>
  );
};
export default Header;
