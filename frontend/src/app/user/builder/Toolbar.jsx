import useCustomizerContext from '@/context/CustomizerContext';
import { ColorPicker, Divider, Title } from '@mantine/core'
import React, { useState } from 'react'

const Toolbar = ({ selComponent }) => {

    const [colorValue, setColorValue] = useState(selComponent.options.color);
    const { VSCodeThemeObject, setVSCodeThemeObject } = useCustomizerContext();

    const handleColorChange = (color) => {
        setColorValue(color);

        const temp = VSCodeThemeObject;
        temp.colors[selComponent.label] = color;
        setVSCodeThemeObject(temp);
    }

    const downloadThemeObject = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(VSCodeThemeObject));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "VSCodeThemeObject.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    const displayTools = () => {
        if (selComponent) {
            return <div>
                <ColorPicker format="hexa" value={colorValue} onChangeEnd={handleColorChange} />
                <h3>{colorValue}</h3>
                <button onClick={downloadThemeObject}>Download Theme Object</button>
            </div>
        } else {
            return <Title align="center" my={20} order={4} c="dimmed">Select a Tool</Title>
        }
    };

    return (
        <div>
            <Title order={4}>Toolbar</Title>
            {displayTools()}

        </div>
    )
}

export default Toolbar