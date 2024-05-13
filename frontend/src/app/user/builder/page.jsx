'use client';
import useCustomizerContext from '@/context/CustomizerContext';
import React from 'react'

const Builder = () => {

  const { currentPreview } = useCustomizerContext();

  return (
    <div>
      {/* {
        currentPreview && (
          <img style={{width: '100%'}} src={`/${currentPreview}`} alt="" />
        )
      } */}
    </div>
  )
}

export default Builder;