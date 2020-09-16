import { createContext } from "react";

// modeType = true (bright mode) | modeType = false (dark mode)
const ModeContext = createContext({
	modeType : 1,
	change : () => {}
});

export default ModeContext;