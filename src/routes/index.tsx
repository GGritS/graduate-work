import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/pageNotFound";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./list";

export const Root: FC = () => {
  const [isUserLogined, setIsUserLogined] = useState<boolean>(false);

  return (
    <Routes>
      {isUserLogined ? (
        <>
          {PRIVATE_ROUTES.map(({ path, component }) => (
            <Route path={path} element={component} key={`Route-${path}`} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </>
      ) : (
        <>
          {PUBLIC_ROUTES.map(({ path, component }) => (
            <Route path={path} element={component} key={`Route-${path}`} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </>
      )}
    </Routes>
  );
};
