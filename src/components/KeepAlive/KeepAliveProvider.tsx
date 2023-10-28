import React, { ReactNode, createContext, memo, useContext, useEffect, useState } from 'react';
import KeepAlive from '.';
export interface KeepAliveContextProps {
  activeName: string | undefined;
  setActiveName: (name: string) => void;
}

const KeepAliveContext = createContext<KeepAliveContextProps>({
  activeName: undefined,
  setActiveName: (name: string) => {
    console.log(name);
  },
} as KeepAliveContextProps);
export const useKeepAliveContent = () => {
  return useContext(KeepAliveContext);
};
const KeepAliveProvider = (props: { children?: ReactNode; initialActiveName?: string }) => {
  const { children, initialActiveName } = props;
  const [activeName, setActiveName] = useState<string | undefined>(initialActiveName);
  useEffect(() => {
    setActiveName(initialActiveName);
  }, [initialActiveName]);
  return <KeepAliveContext.Provider value={{ activeName, setActiveName }}>{children}</KeepAliveContext.Provider>;
};

export default memo(KeepAliveProvider);
