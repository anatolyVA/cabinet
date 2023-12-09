import React from 'react'
import './style.css'

type Props = {
    className: string;
    placeholder?: string;
    type?: string;
};

function Input({type, className, placeholder}: Props) {
  return (
    <input type={type} className={className} placeholder={placeholder}></input>
  )
}

export default Input