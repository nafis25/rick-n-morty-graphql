import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../gql";

const AllCharacters = () => {
   const [pageNo, setPageNo] = useState(1);
   const hasNextPage = true;
   const { called, loading, data } = useQuery(GET_ALL_CHARACTERS, {
      variables: { page: pageNo },
   });

   useEffect(() => {
      if (data?.characters.info.next === null) hasNextPage = false;
   }, [called]);

   return (
      <div>
         <h1>all chars</h1>
         {called && loading && <p>Loading ...</p>}
         <ul>
            {data?.characters.results.map((character) => (
               <li key={character.name}>{character.name}</li>
            ))}
         </ul>
         <div className="d-flex">
            {pageNo > 1 && (
               <button onClick={() => setPageNo((prev) => prev - 1)}>
                  prev
               </button>
            )}
            {hasNextPage && (
               <button onClick={() => setPageNo((prev) => prev + 1)}>
                  next
               </button>
            )}
         </div>
      </div>
   );
};

export default AllCharacters;
