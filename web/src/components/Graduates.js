import data from "./graduates.json";
import { useParams } from "react-router-dom";
import SceneGraduates from "./SceneGraduates";
function Graduates() {
  let params = useParams();
  console.log("jeee", params);
  let joe = data[params.address];
  
  return (
    <div style={{ width: "100%" }}>
        <SceneGraduates name={joe}/>
    </div>
  );
}

export default Graduates;