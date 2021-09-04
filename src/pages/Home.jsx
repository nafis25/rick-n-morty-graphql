import React, { useState } from "react";
import AllCharacters from "../components/AllCharacters";
import AllEpisodes from "../components/AllEpisodes";
import AllLocations from "../components/AllLocations";

const Home = () => {
   const [resource, setResource] = useState("chars");
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
