import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

type StylesProps = {
  isActive: boolean;
};

export const useStyles = makeStyles((theme: Theme) => ({
  navBarItem: ({ isActive }: StylesProps) => ({
    display: "flex",
    alignItems: "end",
    gap: "5px",
    cursor: "pointer",
    padding: "5px 0 5px 10px",
    textDecoration: "none",
    backgroundColor: isActive ? theme.palette.secondary.main : "",
    color: isActive ? "white" : "black",
    "&:hover": {
      marginLeft: isActive ? "0" : "10px",
      transitionDuration: "0.5s",
    },
  }),
}));
