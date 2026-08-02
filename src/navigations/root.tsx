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
          <Route index path="/home1" element={<Pages.Home />} />
          <Route index path="/home2" element={<Pages.HomeNew />} />
          <Route index path="/" element={<Pages.HomeNew2 />} />
        </Routes>
        {/* </Suspense> */}
      </ScrollToTop>
    </BrowserRouter>
  );
};
