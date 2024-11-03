import AboutUsPage from "./components/aboutUsPage/AboutUsPage.jsx";
import Home from "./Home.jsx";


import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      {/* <BrowserRouter basename=""> */}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUsPage />} />
              {/* <Route path="home" element={<LandingPage />} /> */}
              {/* <Route path="myProfile" element={<MyProfile />} /> */}
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
