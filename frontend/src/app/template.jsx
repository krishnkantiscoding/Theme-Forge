'use client';
import { AppProvider } from '@/context/AppContext';
import { CustomizerProvider } from '@/context/CustomizerContext'
import React from 'react'

const Template = ({ children }) => {
  return (
    <CustomizerProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </CustomizerProvider>
  )
}

export default Template