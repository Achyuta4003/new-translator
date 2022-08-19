import React, { useState } from 'react'
import {Close, Check} from "@material-ui/icons"

const Modal = ({ setShowModal, languages, chosenLanguage, setChosenLanguage ,  setLanguageCode}) => {

    const [searchLamguage, setSearchedLanguage] = useState("")

    const filteredLanguages = languages.filter((language) => language.name.toLowerCase().startsWith(searchLamguage.toLowerCase()))



    const handleClick = (e, filteredLanguage) => {
        setChosenLanguage(e.target.textContent)
        setLanguageCode(filteredLanguage.code)

        setShowModal(false)
    }


    const handleChange = (e) => {
        setSearchedLanguage(e.target.value)
        setChosenLanguage(e.target.value)
    }



    return (
        <div className='option-list'>
            <div className="search-bar">
                <input value={chosenLanguage} onChange={handleChange} />
                <div className='close-button' onClick={() => setShowModal(null)}>
                    <Close className='close-icon'/>
                </div>
            </div>
            <div className="option-container">
                <ul>
                    {
                        
                        filteredLanguages?.map((filteredLanguage) => (
                            <div className='list-item' key={filteredLanguage.code}>
                                <div className="icon">
                                    {chosenLanguage === filteredLanguage.name ? <Check className='check'/> : ""}
                                </div>
                                <li
                                    
                                    onClick={(e)=>handleClick(e,filteredLanguage)}
                                    style={{ color: chosenLanguage === filteredLanguage ? "#8ab4f8" : null }}
                                >
                                    {filteredLanguage.name}
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Modal
