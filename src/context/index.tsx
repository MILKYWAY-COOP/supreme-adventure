import React, { createContext, useContext } from 'react';

import { ISolution } from '../types';
import { GetBooks } from './books';

const Context = createContext<ISolution>({} as ISolution);

export const useApp = () => useContext(Context);

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const solutions = GetBooks();

  return <Context.Provider value={{ ...solutions }} children={children} />
};

export default StateProvider;
