import * as Config from "../config.js";
import Nav from "./components/Navigation.jsx";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  async function handleApi() {
    let username = "AdminArchon";
    try {
      const reponse = await axios.get(
        `${Config.BASE_URL}${Config.API_KEY}/v1/cache/user/${username}`
      );
      console.log(reponse.data.data);
      setData(reponse.data.data);
    } catch (err) {
      console.error("erreur lors de l'appel Api :" + err.message);
    }
  }
  useEffect(()=>{
    handleApi();
  },[])

  
  return (
    <div className="flex flex-col justify-start h-full w-full">
      {data ? <Nav donnees={data}/>:""}

      <button
        className="border-2 border-zinc-500 bg-blue-400/10 p-2"
        onClick={handleApi}
      >
        Appel api
      </button>
    </div>
  );
}

export default App;
