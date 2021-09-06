import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../gql";

const Character = ({ match }) => {
   const { id } = match.params;

   const {
      called,
      loading,
      data = {},
   } = useQuery(GET_CHARACTER, {
      variables: { id },
   });

   return (
      <div>
         {called && loading && <p>Loading ...</p>}
         <h1>{data.character?.name}</h1>
      </div>
   );
};

export default Character;
