import { createContext, useContext, useEffect, useState } from "react";

const CustomizerContext = createContext();

export const CustomizerProvider = ({children}) => {

    const [VSCodeThemeObject, setVSCodeThemeObject] = useState([]);
    const [selComponent, setSelComponent] = useState(null);

    const loadThemeObject = () => {
        fetch('/defaultTheme.json')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setVSCodeThemeObject(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
      loadThemeObject();
    }, []);

    return <CustomizerContext.Provider value={{
        VSCodeThemeObject,
        setVSCodeThemeObject,
            selComponent, 
            setSelComponent
        }} >
                {children}
    </CustomizerContext.Provider>
    
}

const useCustomizerProvider = () => useContext(CustomizerContext);

export default useCustomizerProvider;