import { createContext, useContext, useState } from "react";

const MemoryRouterContext = createContext({
  history: ['/'],
  setHistory: () => {}
})

export const MemoryRouter = ({ children }) => {
  const [history, setHistory] = useState(['/'])

  return <MemoryRouterContext.Provider value={{ history, setHistory }}>
    {children}
  </MemoryRouterContext.Provider>
}

export const useMemoryRouter = () => useContext(MemoryRouterContext)
  