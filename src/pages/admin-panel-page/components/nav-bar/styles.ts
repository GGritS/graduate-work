import { CSSProperties, makeStyles } from "@mui/styles";
// import { CSSProperties } from "@mui/styles/cssProperties";
import { Theme } from "@mui/material/styles";

type Styles = Record<string, CSSProperties>;

export const useStyles = makeStyles(
  (theme: Theme) =>
    ({
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
    } as Styles)
);
