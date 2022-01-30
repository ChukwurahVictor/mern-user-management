import { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {


   const {users} = useSelector(state => state.user);

   const handleSearch = (term) => {
      console.log(term.toLowerCase());
      // term.toLowerCase();
      // const user = users.filter(user => user);
   }

   return (
      <div className="search">
         <SearchBar
            onRequestSearch={(term) => {handleSearch(term)}}
            style={{
            margin: '0 auto',
            maxWidth: 800
            }}
         />
      </div>
   );
}

export default Search

