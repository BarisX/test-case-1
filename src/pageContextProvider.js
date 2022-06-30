import React, { useState, createContext } from "react";
export const PageContext = createContext();
const PageContextProvider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1);
	const value = { slideNumber, setSlideNumber };
  return (
    <PageContext.Provider
      value={value}
    >
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
