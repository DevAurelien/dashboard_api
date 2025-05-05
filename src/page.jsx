const page = () => {
  return (
    <div className="flex flex-col gap-4 px-14 w-full h-full">
      <div className="flex w-full gap-4 justify-between mt-8 h-[24vw] border-2 border-blue-500">
        <div className="marque flex w-[24vw] bg-(--gris) border-2 border-white">1</div>
        <div className="upgrade flex w-[36vw] bg-(--gris) border-2 border-white">2</div>
        <div className="ici grid grid-cols-2 gap-4 w-[30vw] h-full flex-wrap">
          <div className="famille flex bg-(--gris)">1</div>
          <div className="prix flex bg-(--gris)" >2</div>
          <div className="taille flex bg-(--gris)">3</div>
          <div className="capacite flex bg-(--gris)">4</div>
        </div>
      </div>
      <div className="image flex w-full h-[25vw] bg-black/60">4</div>
    </div>
  );
};
export default page;
