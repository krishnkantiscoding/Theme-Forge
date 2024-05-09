import useCustomizerContext from '@/context/CustomizerContext';
import { Button, ColorPicker, Divider, Title } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react';
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
        fetch('http://localhost:5000/extension/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ theme: VSCodeThemeObject, name: 'custom-theme'})
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                response.json().then((data) => {
                    console.log(data);
                    const downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", data.downloadPath);
                    downloadAnchorNode.setAttribute("download", "VSCodeThemeObject.json");
                    document.body.appendChild(downloadAnchorNode); // required for firefox
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                    // window.open(data.downloadPath, '_blank');
                });
            }
        }).catch((err) => {
            console.log(err);
        });
        // const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(VSCodeThemeObject));
    }

    const displayTools = () => {
        if (selComponent !== null) {
            return <div>
                <Title order={5} my={20} align="center">{selComponent.label}</Title>
                <ColorPicker fullWidth format="hexa" value={colorValue} onChangeEnd={handleColorChange} />
                <h3>Selectted Color : {colorValue}</h3>
                <Button color='indigo' fullWidth leftSection={
                    <IconDownload size={20} />
                } onClick={downloadThemeObject}>Download Theme Object</Button>
            </div>
        } else {
            return <Title align="center" my={20} order={4} c="dimmed">Select a Tool</Title>
        }
    };

    return (
        <div>
            <Title order={4} my={10}>Toolbar</Title>
            <hr />
            {displayTools()}

        </div>
    )
}

export default Toolbar