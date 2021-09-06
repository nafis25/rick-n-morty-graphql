import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../gql";

const Location = ({ match }) => {
   const { id } = match.params;

   const {
      called,
      loading,
      data = {},
   } = useQuery(GET_LOCATION, {
      variables: { id },
   });

   return (
      <div>
         {called && loading && <p>Loading ...</p>}
         <h1>{data.location?.name}</h1>
      </div>
   );
};

export default Location;
