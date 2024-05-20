"use client";

import React from 'react'

interface Props {
    text: string;
    className: string
}

const MyButton: React.FC<Props> = ({text, className}) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default MyButton