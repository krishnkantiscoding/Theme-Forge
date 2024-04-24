'use client';
import { CustomizerProvider } from '@/context/CustomizerContext'
import React from 'react'

const Template = ({children}) => {
  return (
    <CustomizerProvider>{children}</CustomizerProvider>
  )
}

export default Template