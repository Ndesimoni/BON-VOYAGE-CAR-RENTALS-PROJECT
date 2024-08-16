import { createContext, useContext, useState } from "react";

//We created our context and we are going to store all our global variables in this context.
const AppContext = createContext();

//we will provide this variables to our entire application
function ContextProvider({ children }) {
  const [reservationFormInfo, setReservationFormInfo] = useState({});

  return (
    <AppContext.Provider
      value={{ reservationFormInfo, setReservationFormInfo }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

function useMyContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("context was used outside provider");
  return context;
}

export { ContextProvider, useMyContext };
