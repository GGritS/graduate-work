import { Box } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { useAuthContext } from "../../../../../context/auth/AuthContext";

type NavBarItemProps = {
  index: number;
  setActiveNavBarItem: React.Dispatch<React.SetStateAction<number>>;
  path: string;
  Icon: JSX.Element;
  title: string;
  activeNavBarItemIndex: number;
};

export const NavBarItem: FC<NavBarItemProps> = ({
  index,
  setActiveNavBarItem,
  path,
  Icon,
  title,
  activeNavBarItemIndex,
}) => {
  const style = useStyles({ isActive: index === activeNavBarItemIndex });
  const { handleLogOut } = useAuthContext();

  return (
    <Box
      component={Link}
      key={index}
      to={`/${path}`}
      onClick={() => {
        setActiveNavBarItem(index);
        if (title === "Вийти") handleLogOut();
      }}
      sx={{}}
      className={style.navBarItem}
    >
      {Icon}
      <Box sx={{ fontSize: "20px" }}>{title}</Box>
    </Box>
  );
};
