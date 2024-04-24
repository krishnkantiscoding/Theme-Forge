import { ColorPicker, Divider, Title } from '@mantine/core'
import React, { useState } from 'react'

const Toolbar = ({selComponent}) => {

    const [colorValue, setColorValue] = useState('#fff')

    const displayTools = () => {
        if(selComponent){
            return <div>

        <ColorPicker format="hexa" value={colorValue} onChange={setColorValue} />

            </div>
        }else{
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