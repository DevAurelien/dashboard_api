const Navigation = ({ donnees }) => {
  return (
    <div className="flex justify-between items-center px-20 h-16 bg-(--red)/50">
      <header className="flex text-white text-4xl">
        <h1>Ship DashBoard</h1>
      </header>
      <div className="flex">
        {donnees && (
          <a href={`${donnees.profile.page.url}`} target="_blank" rel="noopener noreferrer"><img
            className="size-12 rounded-full"
            src={`${donnees.profile.image}`}
            alt="Avatar"
          /></a>
        )}
        {donnees && (
          <p className="flex flex-col text-white mx-1 items-center">
          <span>{donnees.profile.display}</span>
          <span>{donnees.profile.badge}</span>
        </p>
        )}
      </div>
      {console.log(donnees)}
    </div>
);

};

export default Navigation;
