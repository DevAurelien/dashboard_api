// import { useEffect, useState } from "react";
// import axios from "axios";

const page = ({donnees, config}) => {

  // const [imageMarque, setImageMarque] = useState(null);
// 
  // useEffect(()=>{
  //   handleSearch(config);
  // },[])

  // async function handleSearch(config){
  //   const suffixeUrl = donnees[0].manufacturer.media[0].images.logo;
  //   try {
  //     const response = await axios.get(`${config.RSI_URL}${suffixeUrl}`, {
  //       responseType: "blob", 
  //     });
  //     const blobUrl = URL.createObjectURL(response.data); 
  //     setImageMarque(blobUrl);
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération de l'image :", error);
  //   }
  // }

  return (
    <div className="flex flex-col gap-4 px-14 w-full h-full ">
      <div className="flex w-full gap-4 justify-between mt-8 h-[24vw] border-2 border-blue-500">
        <div className="marque flex w-[24vw] h-full bg-(--gris) border-2 border-white">
          <img className=" overflow-hidden size-[24vw]" src={config.RSI_URL + donnees[0].manufacturer.media[0].images.cover} alt="" />
        </div>
        <div className="upgrade flex w-[36vw] h-full bg-(--gris) border-2 border-white">
          2
        </div>
        <div className="ici grid grid-cols-2 gap-4 w-[30vw] h-full flex-wrap">
          <div className="famille flex bg-(--gris)">1</div>
          <div className="prix flex bg-(--gris)">2</div>
          <div className="taille flex bg-(--gris)">3</div>
          <div className="capacite flex bg-(--gris)">4</div>
        </div>
      </div>
      <div className="image flex justify-center items-center overflow-hidden w-full h-[25vw] bg-black/60"><img src="https://media.robertsspaceindustries.com/ucp60er1lm6p0/wallpaper_3840x2160.jpg" alt="" /></div>
      {/* {donnees ? console.log(donnees):""} */}
    </div>
  );
};
export default page;
