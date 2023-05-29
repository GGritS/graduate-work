import { FC, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import { NavBarItem } from "../common/navBarItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const NAV_BAR_ITEMS = [
  {
    title: "Головна",
    Icon: <HomeIcon fontSize="medium" />,
    path: "",
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
  {
    title: "Вийти",
    Icon: <LogoutIcon fontSize="medium" />,
    path: "",
  },
];

export const NavBar: FC = () => {
  const [activeNavBarItem, setActiveNavBarItem] = useState<number>(0);
  const style = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Box className={style.wrapper}>
      {NAV_BAR_ITEMS.map((nav_item, index) => (
        <Box className={style.navBarItemsWrapper} key={index}>
          <NavBarItem
            Icon={nav_item.Icon}
            index={index}
            path={nav_item.path}
            title={nav_item.title}
            setActiveNavBarItem={setActiveNavBarItem}
            activeNavBarItemIndex={activeNavBarItem}
          />
        </Box>
      ))}
    </Box>
  );
};
