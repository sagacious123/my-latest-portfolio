// import { AuthBoxedContainer, DashboardBaseViewContainer } from 'containers';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "../pages";

import ScrollToTop from "./ScrollToTop";

export const RootNavigator = () => {
  // useTokenRefresh();
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route index path="/" element={<Pages.Home />} />
        </Routes>
        {/* </Suspense> */}
      </ScrollToTop>
    </BrowserRouter>
  );
};
