import Grid from "@mui/material/Grid2";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import KeyboardCommandKeyOutlinedIcon from "@mui/icons-material/KeyboardCommandKeyOutlined";
import "./CoinsTable.css";
import { useState } from "react";

type ActiveKeys = "all" | "dog" | "cat" | "elon" | "politics";

const CoinsTable = () => {
  const [active, setActive] = useState<string>("all");

  const setActiveKey = (value: ActiveKeys) => {
    if (value === "all") {
      setActive("all");
      return;
    }
    if (value === "dog") {
      setActive("dog");
      return;
    }
    if (value === "cat") {
      setActive("cat");
      return;
    }
    if (value === "elon") {
      setActive("elon");
      return;
    }
    if (value === "politics") {
      setActive("politics");
      return;
    }
  };

  return (
    <Grid className="container">
      <Grid className="table-filter-container">
        <Grid className="filter-container">
          <Grid className="filters">
            <span
              role="button"
              tabIndex={-1}
              className={`all-filter ${
                active === "all" ? "active-filter" : ""
              }`}
              onClick={() => setActiveKey("all")}
            >
              <LeaderboardOutlinedIcon fontSize="small" />
              All
            </span>
            <span
              role="button"
              tabIndex={-1}
              onClick={() => setActiveKey("dog")}
              className={`${active === "dog" ? "active-filter" : ""}`}
            >
              🔥Dog - Themed
            </span>
            <span
              role="button"
              tabIndex={-1}
              onClick={() => setActiveKey("cat")}
              className={`${active === "cat" ? "active-filter" : ""}`}
            >
              🔥Cat - Themed
            </span>
            <span
              role="button"
              tabIndex={-1}
              onClick={() => setActiveKey("elon")}
              className={`${active === "elon" ? "active-filter" : ""}`}
            >
              🔥Elon Musk Inspired
            </span>
            <span
              role="button"
              tabIndex={-1}
              onClick={() => setActiveKey("politics")}
              className={`${active === "politics" ? "active-filter" : ""}`}
            >
              🔥Politics - Themed
            </span>
          </Grid>
          <Grid className="categories-container">
            <KeyboardCommandKeyOutlinedIcon fontSize="small" />
            Categories
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinsTable;
