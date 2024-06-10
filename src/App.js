import { Route, Routes, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import FavMeetups from "./pages/FavMeetups";
import NewMeetup from "./pages/NewMeetup";
import MainNav from "./components/MainNav";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/fav" element={<FavMeetups />} />
          <Route path="/new" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
