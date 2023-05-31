import { FC, ReactNode, useState } from "react";
// import { useStyles } from "./style";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { ReportCircle } from "../report-circle";
import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

type ReportCardProps = {
  value: number;
  title: string;
  children: ReactNode;
};

export const ReportCard: FC<ReportCardProps> = ({ value, title, children }) => {
  // const style = useStyles();
  const [requiredAmount, setRequiredAmount] = useState<number>(value);
  const [inputValue, setInputValue] = useState<number>(requiredAmount);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  function calculatePercent(maxValue: number, value: number): number {
    const percent = (value / maxValue) * 100;
    return parseFloat(percent.toFixed(1));
  }

  const handleUpdateRequiredAmount = () => {
    setRequiredAmount(inputValue);
  };

  const percent = calculatePercent(requiredAmount, value);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "2rem",
        padding: "1.8rem",
        boxShadow: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "#7380ec",
          }}
        >
          {children}
        </Box>
        <Typography>{title}</Typography>
        <Box>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            {value} /
            {isChanging ? (
              <TextField
                sx={{ marginLeft: "10px" }}
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(+e.target.value)}
              />
            ) : (
              <>{requiredAmount}</>
            )}{" "}
            <IconButton
              sx={{ marginLeft: "10px" }}
              onClick={() => {
                if (isChanging) {
                  handleUpdateRequiredAmount();
                }
                setIsChanging((prev) => !prev);
              }}
            >
              {isChanging ? (
                <DoneOutlineIcon color="success" fontSize="small" />
              ) : (
                <EditIcon color="info" fontSize="small" />
              )}
            </IconButton>
          </Typography>
          <IconButton></IconButton>
        </Box>
      </Box>
      {value === -1 ? (
        <Box>Щось пішло не так...</Box>
      ) : (
        <ReportCircle
          percent={isNaN(percent) ? NaN : percent >= 100 ? -1 : percent}
        />
      )}
    </Box>
  );
};
