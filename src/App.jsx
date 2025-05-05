import * as Config from "../config.js";
import Nav from "./components/Navigation.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import Page from "./page.jsx";

function App() {
  const [data, setData] = useState(null);
  const [shipName, setShipName] = useState("");

  async function handleApi() {
    let username = "AdminArchon";
    try {
      const reponse = await axios.get(
        `${Config.BASE_URL}${Config.API_KEY}/v1/cache/user/${username}`
      );
      // console.log(reponse.data.data);
      setData(reponse.data.data);
    } catch (err) {
      console.error("erreur lors de l'appel Api :" + err.message);
    }
  }

  async function handleApiShip() {
    try {
      const reponse = await axios.get(
        `${Config.BASE_URL}${Config.API_KEY}/v1/cache/ships`
      );
      console.log(reponse.data.data);
      setShipName(reponse.data.data);
    } catch (err) {
      console.error("erreur lors de l'appel Api :" + err.message);
    }
  }


  useEffect(() => {
    handleApi();
    // handleApiShip();
  }, []);

  return (
    <div className="flex flex-col justify-start h-full w-full overflow-y-scroll">
      {data ? <Nav donnees={data} /> : ""}
      <SearchBar />
      <Page/>
      {/* <button
        className="border-2 border-zinc-500 bg-blue-400/10 p-2"
        onClick={handleApi}
      >
        Appel api
      
      </button> */}
      
    </div>
  );
}

export default App;
