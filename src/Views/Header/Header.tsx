import Grid from "@mui/material/Grid2";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./Header.css";

const Header = () => {
  return (
    <Grid className="header-container">
      <Grid className="header-title">
        Cryptocurrencies Prices by Market Cap
      </Grid>
      <Grid className="header-helper-container">
        The global cryptocurrency market cap today is $2.8 trillion, a{" "}
        <span className="header-volume-change">
          <ArrowDropUpIcon /> 4.3% &nbsp;
        </span>
        change in the last 24 hours.
      </Grid>
    </Grid>
  );
};

export default Header;
