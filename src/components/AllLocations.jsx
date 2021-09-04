import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "../gql";

const AllLocations = () => {
   const [pageNo, setPageNo] = useState({ page: 1, maxPage: Infinity });
   const { called, loading, data } = useQuery(GET_ALL_LOCATIONS, {
      variables: { page: pageNo.page },
   });

   useEffect(() => {
      if (data?.locations.info.pages)
         setPageNo({ ...pageNo, maxPage: data.locations.info.pages });
   }, []);

   return (
      <div>
         <h1>all locs</h1>
         {called && loading && <p>Loading ...</p>}
         <ul>
            {data?.locations.results.map((location) => (
               <li key={location.name}>{location.name}</li>
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

export default AllLocations;
