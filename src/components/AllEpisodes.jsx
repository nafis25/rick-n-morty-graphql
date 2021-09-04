import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "../gql";

const AllEpisodes = () => {
   const [pageNo, setPageNo] = useState(1);
   const hasNextPage = true;
   const { called, loading, data } = useQuery(GET_ALL_EPISODES, {
      variables: { page: pageNo },
   });

   useEffect(() => {
      if (data?.episodes.info.next === null) hasNextPage = false;
   }, [called]);

   return (
      <div>
         <h1>all eps</h1>
         {called && loading && <p>Loading ...</p>}
         <ul>
            {data?.episodes.results.map((episode) => (
               <li key={episode.name}>{episode.name}</li>
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

export default AllEpisodes;
