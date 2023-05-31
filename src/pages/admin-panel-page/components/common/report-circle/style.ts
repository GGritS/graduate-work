import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  progress: {
    position: "relative",
    width: "5.6rem",
    height: "5.6rem",
    borderRadius: "50%",
  },
  svg: {
    width: "5.6rem",
    height: "5.6rem",
  },
  circle: {
    strokeLinecap: "round",
    fill: "none",
    strokeWidth: "14px",
    strokeDasharray: "227",
    strokeDashoffset: "227",
    transform: "translate(5px, 5px)",
    transition: "all 300ms ease",
  },
  circleBackground: {
    strokeDashoffset: 0,
    stroke: "#f3f3f3",
  },
  number: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(0px, -2px)",
  },
  circleFill: {
    stroke: theme.palette.secondary.main,
  },
}));
