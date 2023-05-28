import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/pageNotFound";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./list";
import { AdminPanelLayout } from "../pages/admin-panel-page";

export const Root: FC = () => {
  const [isUserLogined, setIsUserLogined] = useState<boolean>(false);

  return (
    <>
      {isUserLogined ? (
        <AdminPanelLayout>
          <Routes>
            {PRIVATE_ROUTES.map(({ path, component }) => (
              <Route path={path} element={component} key={`Route-${path}`} />
            ))}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AdminPanelLayout>
      ) : (
        <Routes>
          {PUBLIC_ROUTES.map(({ path, component }) => (
            <Route path={path} element={component} key={`Route-${path}`} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
};
