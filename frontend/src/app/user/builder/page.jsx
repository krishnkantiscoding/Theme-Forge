'use client';
import useCustomizerContext from '@/context/CustomizerContext';
import { Title } from '@mantine/core';
import React from 'react'

const Builder = () => {

  const { currentPreview } = useCustomizerContext();

  return (
    <div>
      {
        currentPreview && (
          <img style={{ height: '100%', bottom: currentPreview.includes('statusBar') ? '0px' : '' }} src={`/${currentPreview}`} alt="" />
        )
      }
    </div>
  )
}

export default Builder;