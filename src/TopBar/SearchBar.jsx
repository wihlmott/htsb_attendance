import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

const SearchBar = ({width='auto', marginTop='5px', sendSearch}) => {
  const styles = {
    searchBar: {
      position: 'absolute',
      width: width,
      marginLeft: "10px",
      marginTop: marginTop,
      borderRadius: "10px",
      backgroundColor: "rgba(0,0,0,0.5)",
      "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
    },
    searchIcon: {
      cursor:'pointer',
      position: "absolute",
      right: "1.5px",
      marginTop: "2px",
      borderRadius: "50%",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    searchText: { pl: 1, color: "white", fontSize: "small" },
  };

  const [searchText, setSearchText] = useState();

  const searchTextChangedHandler = (e) => setSearchText(e.target.value);
  const searchHandler = () => sendSearch(searchText);

  return (
    <div style={styles.searchBar}>
      <InputBase
        sx={styles.searchText}
        placeholder="Search learner"
        onChange={searchTextChangedHandler}
        fullWidth
      />
      <SearchIcon sx={styles.searchIcon} onClick={searchHandler} />
    </div>
  );
};


export default SearchBar;
