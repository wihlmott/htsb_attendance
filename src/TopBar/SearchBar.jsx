import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState();

  const searchTextChangedHandler = (e) => setSearchText(e.target.value);
  const searchHandler = () => console.log("searching for... " + searchText);

  return (
    <div style={styles.searchBar}>
      <InputBase
        sx={styles.searchText}
        placeholder="Search learner"
        onChange={searchTextChangedHandler}
      />
      <SearchIcon sx={styles.searchIcon} onClick={searchHandler} />
    </div>
  );
};

const styles = {
  searchBar: {
    width: "100%",
    marginLeft: "10px",
    marginTop: "5px",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.15)",
    "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
  },
  searchIcon: {
    position: "absolute",
    right: "9px",
    marginTop: "1px",
    padding: "1px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  searchText: { pl: 1, color: "white", fontSize: "small" },
};

export default SearchBar;
