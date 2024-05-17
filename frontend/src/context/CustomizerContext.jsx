import { Suspense, createContext, lazy, useContext, useEffect, useState } from "react";

const CustomizerContext = createContext();

export const CustomizerProvider = ({ children }) => {

    const [VSCodeThemeObject, setVSCodeThemeObject] = useState(null);
    const [selComponent, setSelComponent] = useState(null);
    const [themeObjectPromise, setThemeObjectPromise] = useState(null);
    const [currentPreview, setCurrentPreview] = useState('');

    const [iconDefinitions, setIconDefinitions] = useState({
        "_folder_dark": {
            "iconPath": "./images/folder.svg"
        },
        "_file_dark": {
            "iconPath": "./images/file.svg"
        }
    });

    const [iconTheme, setIconTheme] = useState({
        "iconDefinitions": iconDefinitions,
        "folderExpanded": "_folder_open_dark",
        "folder": "_folder_dark",
        "file": "_file_dark",
        "rootFolderExpanded": "_root_folder_open_dark",
        "rootFolder": "_root_folder_dark",
        "fileExtensions": {},
        "fileNames": {},
        "languageIds": {},
        "light": {
            "folderExpanded": "_folder_open_light",
            "folder": "_folder_light",
            "rootFolderExpanded": "_root_folder_open",
            "rootFolder": "_root_folder",
            "file": "_file_light",
            "fileExtensions": {},
            "fileNames": {},
            "languageIds": {}
        },
        "highContrast": {}
    })

    const [loadingTheme, setLoadingTheme] = useState(false);

    const isObjectLoading = () => {
        return VSCodeThemeObject === null;
    }

    // const LazyChildren = lazy(() => themeObjectPromise.then(() => ({ default: () => children })));

    useEffect(() => {
        const loadThemeObject = () => {
            setLoadingTheme(true);
            fetch('/defaultTheme.json')
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setVSCodeThemeObject(data);
                    setLoadingTheme(false);
                })
                .catch((err) => {
                    console.log(err);
                });

            // setThemeObjectPromise(promise);
        }

        loadThemeObject();
    }, []);

    return <CustomizerContext.Provider value={{
        VSCodeThemeObject,
        setVSCodeThemeObject,
        selComponent,
        setSelComponent,
        isObjectLoading,
        currentPreview,
        setCurrentPreview
    }} >
        {
            (!loadingTheme && VSCodeThemeObject !== null) ? children : <div>Loading...</div>
        }
    </CustomizerContext.Provider>

}

const useCustomizerContext = () => useContext(CustomizerContext);

export default useCustomizerContext;