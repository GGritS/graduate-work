import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    backgroundColor: theme.palette.customCardColor.main,
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px",
  },
  navBarItemsWrapper: {
    "&:last-child": {
      marginTop: "15px",
    },
  },
}));
