import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuthContext } from "../../context/auth/AuthContext";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

export const Login: FC = () => {
  const [isPasswordShowed, setIsPasswordShowed] = useState<boolean>(false);
  const { handleLogin, loginError } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      password: "dasdsad",
      email: "admin@gmail.com",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
    validationSchema,
  });

  const style = useStyles();
  return (
    <Box className={style.wrapper}>
      <form onSubmit={formik.handleSubmit} className={style.content}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Авторизуватись як адмін
        </Typography>
        <Box>
          <Typography>Почта:</Typography>
          <TextField
            fullWidth
            placeholder="Email"
            type="text"
            onChange={formik.handleChange}
            id="email"
            helperText={formik.errors.email && formik.errors.email}
            value={formik.values.email}
          />
        </Box>

        <Box>
          <Typography>Пароль:</Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              fullWidth
              id="password"
              placeholder="Пароль"
              type={isPasswordShowed ? "text" : "password"}
              onChange={formik.handleChange}
              helperText={formik.errors.password && formik.errors.password}
              value={formik.values.password}
            />
            <IconButton onClick={() => setIsPasswordShowed(!isPasswordShowed)}>
              {isPasswordShowed ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Button
            disabled={
              formik.values.email.length <= 0 ||
              formik.values.password.length <= 5 ||
              !!formik.errors.email ||
              !!formik.errors.email
            }
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
          >
            Авторизуватись
          </Button>
          <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
            Якщо ви не маєте данних від аккаунту, то пропонуємо вам{" "}
            <Link to="/"> повернутсь на головну</Link>.
          </Typography>
        </Box>
      </form>
    </Box>
  );
};
