import { CgSearch, CgArrowDownR, CgCheck} from "react-icons/cg";
import { useState } from 'react';


const DropDown = ({toogle, orderBy, onOrderByChange, sortBy, onSortByChange}) => {
  if (!toogle){
    return null
  }
  return(
    <div className="origin-top-right absolute right-0 mt-2 w-56
    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div
          onClick={() => onSortByChange("petName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Pet Name {(sortBy === "petName") && <CgCheck />}</div>
        <div
          onClick={() => onSortByChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Owner Name  {(sortBy === "ownerName") && <CgCheck />}</div>
        <div
          onClick={() => onSortByChange("aptDate")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Date {(sortBy === "aptDate") && <CgCheck />}</div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem">Asc {(orderBy === "asc") && <CgCheck />}</div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Desc {(orderBy === "desc") && <CgCheck />}</div>
      </div>
    </div>
  )
}

function Search({query, onQueryChange, orderBy, onOrderByChange, sortBy, onSortByChange }) {
  const [toogleSort, settoogleSort] = useState(false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CgSearch className="text-gray-600"/>
          <label htmlFor="query" className="sr-only" />
        </div>
        <input 
          onChange={(event) => {onQueryChange(event.target.value)}}
          type="text" 
          name="query" 
          id="query" 
          value={query}
          className="outline-none pl-10 rounded-md focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search" />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              onClick={() => {settoogleSort(!toogleSort)}} 
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Sort By <CgArrowDownR className="ml-2 text-lg" />
            </button>
            <DropDown 
              toogle={toogleSort}
              sortBy={sortBy}
              onSortByChange={mySort => onSortByChange(mySort)}
              orderBy={orderBy}
              onOrderByChange={myOrder => onOrderByChange(myOrder)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;