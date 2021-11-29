import { useContext } from "react";
import { AuthContext } from "../../context-provider/authprovider";

const useAuth = () => {
    return useContext(AuthContext);
}

export { useAuth }