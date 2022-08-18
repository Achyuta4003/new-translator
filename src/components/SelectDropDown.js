import React from 'react'

const SelectDropDown = ({ styles,selectedLanguage, setShowModal}) => {
    return (
        <div className='select-drop-down' onClick={()=>setShowModal(styles)}>
            <input type="text" value={selectedLanguage} disabled={true}/>
            <div className="down-arrow">
                <svg
                    focusable="false"
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 25'
                >
                    <path d="M7 10l5 5 5-5z"></path>

                </svg>
            </div>
            
        </div>
    )
}

export default SelectDropDown
