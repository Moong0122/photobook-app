import React, { useState } from "react";
import ModeContext from "../../context/Mode.context";

const ModeProvider = ({ children }) => {
	const change = () => {
		setNumber(prevState => {
			return {
				...prevState,
				modeType: prevState.modeType === 1 ? 0 : 1 
			};
		});
	};
	const initialState = {
		modeType : 1,
		change
	};
	const [modeType, setNumber] = useState(initialState);

	return (
		<ModeContext.Provider value={modeType}>{children}</ModeContext.Provider>
	);
};

export default ModeProvider;