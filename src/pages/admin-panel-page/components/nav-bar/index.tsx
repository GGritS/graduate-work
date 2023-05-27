import React, { FC, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NAV_BAR_ITEMS = [
  {
    title: "Головна",
    Icon: <HomeIcon fontSize="medium" />,
    path: "home",
  },
  {
    title: "Таблиця",
    Icon: <BackupTableIcon fontSize="medium" />,
    path: "table",
  },
  {
    title: "Звітність",
    Icon: <AssessmentIcon fontSize="medium" />,
    path: "reports",
  },
];

export const NavBar: FC = () => {
  const [activeNavBarItem, setActiveNavBarItem] = useState<number>(0);

  return (
    <Box
      sx={{
        pl: "5px",
        pt: "5px",
        width: "10%",
        bgcolor: "blue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {NAV_BAR_ITEMS.map((nav_item, index) => (
        <Box
          component={Link}
          to={`/adminPanel/${nav_item.path}`}
          onClick={() => setActiveNavBarItem(index)}
          sx={{
            display: "flex",
            alignItems: "end",
            gap: "5px",
            cursor: "pointer",
            color: activeNavBarItem === index ? "black" : "red",
            ml: activeNavBarItem === index ? "10px" : "0px",
            ":hover": {
              ml: "10px",
              transitionDuration: "0.5s",
            },
          }}
        >
          {nav_item.Icon}
          <Box sx={{ fontSize: "20px" }}>{nav_item.title}</Box>
        </Box>
      ))}
    </Box>
  );
};
