
const SearchBar = () => {
  return (
    <form className="flex p-4 text-white gap-4 bg-(--bleuF)">
        <label className="text-xl font-EuroStyleNormal" htmlFor="shipName">Nom du Vaisseau</label>
        <input className="bg-(--bleuC) rounded p-1" id="shipName" name="shipName" type="text"/>
    </form>
  )
}  
export default SearchBar

