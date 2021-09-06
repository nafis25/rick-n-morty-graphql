import React, { useEffect, useState } from "react";
import AllCharacters from "../components/AllCharacters";
import AllEpisodes from "../components/AllEpisodes";
import AllLocations from "../components/AllLocations";

const Home = () => {
   const [resource, setResource] = useState("chars");

   useEffect(() => {
      let resourceData = localStorage.getItem("resource");
      if (resourceData) setResource(resourceData);
   }, []);

   useEffect(() => {
      localStorage.setItem("resource", resource);
   });

   return (
      <div>
         <button onClick={() => setResource("chars")}>Characters</button>
         <button onClick={() => setResource("eps")}>Episodes</button>
         <button onClick={() => setResource("locs")}>Locations</button>
         {resource === "chars" && <AllCharacters />}
         {resource === "eps" && <AllEpisodes />}
         {resource === "locs" && <AllLocations />}
      </div>
   );
};

export default Home;
