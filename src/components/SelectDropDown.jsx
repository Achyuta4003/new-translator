import React from 'react'
import {ArrowDropDown} from "@material-ui/icons"


const SelectDropDown = ({ styles,selectedLanguage, setShowModal}) => {
    return (
        <div className='select-drop-down' onClick={()=>setShowModal(styles)}>
            <input type="text" value={selectedLanguage} disabled={true}/>
            <div className="down-arrow">
                <ArrowDropDown className='drop-down-icon'/>
            </div>
            
        </div>
    )
}

export default SelectDropDown
