import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../gql";
import { useHistory } from "react-router";

const AllCharacters = () => {
   let currentPage = localStorage.getItem("charPage");

   const [pageNo, setPageNo] = useState({
      page: currentPage ? parseInt(currentPage) : 1,
      maxPage: Infinity,
   });
   const { called, loading, data } = useQuery(GET_ALL_CHARACTERS, {
      variables: { page: pageNo.page },
   });

   const history = useHistory();

   useEffect(() => {
      if (data?.characters.info.pages)
         setPageNo({ ...pageNo, maxPage: data.characters.info.pages });
   }, [loading]);

   useEffect(() => {
      localStorage.setItem("charPage", pageNo.page);
   });

   return (
      <div>
         <h1>all chars</h1>
         {called && loading && <p>Loading ...</p>}
         <ul>
            {data?.characters.results.map((character) => (
               <li
                  key={character.id}
                  onClick={(e) => {
                     e.preventDefault();
                     history.push(`/character/${character.id}`);
                  }}
               >
                  {character.name}
               </li>
            ))}
         </ul>
         <div className="d-flex">
            {pageNo.page > 1 && (
               <button
                  onClick={() =>
                     setPageNo({ ...pageNo, page: pageNo.page - 1 })
                  }
               >
                  prev
               </button>
            )}
            {pageNo.page < pageNo.maxPage && (
               <button
                  onClick={() =>
                     setPageNo({ ...pageNo, page: pageNo.page + 1 })
                  }
               >
                  next
               </button>
            )}
         </div>
      </div>
   );
};

export default AllCharacters;
