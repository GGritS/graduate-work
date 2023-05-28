import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    background: theme.palette.customBackground.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    boxShadow: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
    width: "30%",
    height: "50%",
    backgroundColor: "#fff",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
  },
}));
