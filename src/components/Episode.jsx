import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../gql";

const Episode = ({ match }) => {
   const { id } = match.params;

   const {
      called,
      loading,
      data = {},
   } = useQuery(GET_EPISODE, {
      variables: { id },
   });

   return (
      <div>
         {called && loading && <p>Loading ...</p>}
         <h1>{data.episode?.name}</h1>
      </div>
   );
};

export default Episode;
