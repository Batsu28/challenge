import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./compornents/Footer";
import Header from "./compornents/Header";
import ShowPage from "./compornents/sub-component/ShowPage";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [navbar, setNavbar] = useState();
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:2001/navbar")
      .then((data) => setNavbar(data.data));
  }, []);

  async function getWeather(cityName) {
    console.log(cityName);
    let res = await axios.post("http://localhost:2001/weather", { cityName });
    return setWeather(res.data);
  }
  console.log(getWeather());
  return (
    <div className="App">
      <Header navbar={navbar} getWeather={getWeather} />
      <Routes>
        <Route path="/" element={<Home navbar={navbar} />}>
          {/* {navbar &&
            Object.keys(navbar).map((list, index) => ( */}
          <Route path={`/:list`} element={<ShowPage />}>
            <Route path={`/:list/:id`} element />
          </Route>
          {/* ))} */}
          {/* <Route path="/page/:id" element={<ShowPage />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
