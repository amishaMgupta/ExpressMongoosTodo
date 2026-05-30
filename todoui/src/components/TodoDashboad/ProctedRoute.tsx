import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
function ProtectedRoute({ children }:any) {
   useEffect(() => { 
      const navigate = useNavigate();
      const data = localStorage.getItem("username");
      if(data!="user"){
         navigate("/login");
      }
   },[])
    return children;
}
export default ProtectedRoute;
