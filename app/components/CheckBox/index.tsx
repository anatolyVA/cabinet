import './style.css'
import React from 'react'

type Props = {
    disabled?: boolean;
    label?: React.ReactNode;
    id?: string;
    name?: string;
    labelClassname?: string;
};

function CheckBox({labelClassname, disabled, label, id, name} : Props) {
  return (
    <div className='group'>
        <input disabled={disabled} className='checkbox' name={name} id={id} type='checkbox'>
            
        </input>
        <label className={`label ${labelClassname}`} htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox