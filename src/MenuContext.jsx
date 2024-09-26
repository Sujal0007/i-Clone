import React, { createContext, useState } from 'react';

const HoverMenuContext = createContext();


export const HoverMenuProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

  

  return (
    <HoverMenuContext.Provider
      value={{isHovered, setIsHovered,isOpenMenu, setOpenMenu }}
    >
      {children}
    </HoverMenuContext.Provider>
  );
};

export default HoverMenuContext;
