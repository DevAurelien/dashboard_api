import * as Config from "../config.js";
import Nav from "./components/Navigation.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import Page from "./page.jsx";

function App() {
  const [data, setData] = useState(null);
  const [shipName, setShipName] = useState(null);

  async function handleApi() {
    let username = "AdminArchon";
    return axios
      .get(`${Config.BASE_URL}${Config.API_KEY}/v1/cache/user/${username}`)
      .catch((err) => {
        console.error("erreur lors de l'appel Api :" + err.message);
      });
  }

  // async function handleApiShip() {
  //   try {
  //     const reponse = await axios.get(
  //       `${Config.BASE_URL}${Config.API_KEY}/v1/cache/ships`
  //     );
  // console.log(reponse.data.data[0]);
  // setShipName(reponse.data.data[0]);
  //   } catch (err) {
  //     console.error("erreur lors de l'appel Api :" + err.message);
  //   }
  // }

  useEffect(() => {
    async function recupererDonnees() {
      try {
        const [apiResponse, jsonResponse] = await Promise.all([
          handleApi(),
          axios.get("./memo.json"),
        ]);
        apiResponse?.data?.data ? setData(apiResponse.data.data) : "";
        jsonResponse?.data ? setShipName(jsonResponse.data) : "";
        console.log(jsonResponse.data)
      } catch (e) {
        console.error("Erreur lors de la récupération des données :", e);
      }
    }

    recupererDonnees();
  }, []);

  return (
    <div className="flex flex-col justify-start h-full w-full overflow-y-scroll">
      {data ? <Nav donnees={data} /> : ""}
      <SearchBar />
      {shipName ? <Page donnees={shipName} config={Config}/> : ""}
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
