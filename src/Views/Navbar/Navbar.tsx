import { InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/images/pixelcut-export (1).png";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Grid className="navbar-container">
      <Grid className="navbar-blocks">
        <img src={Logo} alt="Buzz Coinz" />
        <Grid className="nav-links">Cryptocurrencies</Grid>
        <Grid className="nav-links">Watchlist</Grid>
        <Grid className="nav-links">Learn</Grid>
      </Grid>
      <Grid className="navbar-blocks">
        <TextField
          type="text"
          placeholder="Search"
          className="search-box"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{ color: "white", padding: "0px", margin: "0px" }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
        <AccountCircleIcon className="account-icon" />
      </Grid>
    </Grid>
  );
};

export default Navbar;
