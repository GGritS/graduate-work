import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/pageNotFound";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./list";
import { useAuthContext } from "../context/auth/AuthContext";
import { LinearProgress } from "@mui/material";

export const Root: FC = () => {
  const { isUserLogined, isDataFetched } = useAuthContext();

  return (
    <>
      {isDataFetched ? (
        <>
          {isUserLogined ? (
            <Routes>
              {PRIVATE_ROUTES.map(({ path, component }) => (
                <Route path={path} element={component} key={`Route-${path}`} />
              ))}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          ) : (
            <Routes>
              {PUBLIC_ROUTES.map(({ path, component }) => (
                <Route path={path} element={component} key={`Route-${path}`} />
              ))}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          )}
        </>
      ) : (
        <LinearProgress />
      )}
    </>
  );
};
