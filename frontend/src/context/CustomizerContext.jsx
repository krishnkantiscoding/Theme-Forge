import { Suspense, createContext, lazy, useContext, useEffect, useState } from "react";

const CustomizerContext = createContext();

export const CustomizerProvider = ({ children }) => {

    const [VSCodeThemeObject, setVSCodeThemeObject] = useState([]);
    const [selComponent, setSelComponent] = useState(null);
    const [themeObjectPromise, setThemeObjectPromise] = useState(null);

    const loadThemeObject = () => {
        fetch('/defaultTheme.json')
            .then((response) => response.json())
            .then(data => {
                // console.log(data);
                setVSCodeThemeObject(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const isObjectLoading = () => {
        return VSCodeThemeObject.length === 0;
    }

    const LazyChildren = lazy(() => themeObjectPromise.then(() => ({ default: () => children })));

    useEffect(() => {
        const loadThemeObject = () => {
            const promise = fetch('/defaultTheme.json')
                .then((response) => response.json())
                .then(data => {
                    setVSCodeThemeObject(data);
                    return data;
                })
                .catch((err) => {
                    console.log(err);
                });

            setThemeObjectPromise(promise);
        }

        loadThemeObject();
    }, []);

    return <CustomizerContext.Provider value={{
        VSCodeThemeObject,
        setVSCodeThemeObject,
        selComponent,
        setSelComponent,
        isObjectLoading
    }} >
        <Suspense fallback={<div>Loading...</div>}>
            <LazyChildren />
        </Suspense>
    </CustomizerContext.Provider>

}

const useCustomizerContext = () => useContext(CustomizerContext);

export default useCustomizerContext;