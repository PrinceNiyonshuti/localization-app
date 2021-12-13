
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

interface PropType {
	component: React.FC;
}

const PrivateRoutes: FC<PropType> = ({ component: Component }) => {
	const { currentUser } = useContext(AuthContext);
	
	if (currentUser) return <Component />;
	return <Navigate to="/" />;
};

export default PrivateRoutes;
