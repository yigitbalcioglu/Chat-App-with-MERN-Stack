import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { AuthContextProvider}