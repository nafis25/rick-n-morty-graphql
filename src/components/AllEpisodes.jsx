import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "../gql";
import { useHistory } from "react-router-dom";

const AllEpisodes = () => {
   const [pageNo, setPageNo] = useState({ page: 1, maxPage: Infinity });
   const { called, loading, data } = useQuery(GET_ALL_EPISODES, {
      variables: { page: pageNo.page },
   });

   const history = useHistory();

   useEffect(() => {
      if (data?.episodes.info.pages)
         setPageNo({ ...pageNo, maxPage: data.episodes.info.pages });
   }, [loading]);

   return (
      <div>
         <h1>all eps</h1>
         {called && loading && <p>Loading ...</p>}
         <ul>
            {data?.episodes.results.map((episode) => (
               <li
                  key={episode.id}
                  onClick={(e) => {
                     e.preventDefault();
                     history.push(`/episode/${episode.id}`);
                  }}
               >
                  {episode.name}
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

export default AllEpisodes;
