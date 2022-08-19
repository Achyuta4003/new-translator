import React from 'react'
import {Close} from "@material-ui/icons"
import SelectDropDown from './SelectDropDown'

const Textbox = ({ styles, selectedLanguage, setShowModal,  setTextToTranslate,  textToTranslate,  translatedText, setTranslatedText }) => {

  const handleClick = ()=>{
    setTextToTranslate("")
    setTranslatedText("")
  }

  return (
    <div className={styles}>
      <SelectDropDown selectedLanguage={selectedLanguage} setShowModal={setShowModal} styles={styles} />
      <textarea placeholder={styles === "input" ? "Enter Text" : "Translation"} onChange={e=>setTextToTranslate(e.target.value)} value={styles === "input" ? textToTranslate : translatedText} disabled={styles === "output"} />
      {
        styles === "input" && (
          <div className='delete' onClick={handleClick}> <Close/> </div>
        )
      }
    </div>
  )
}

export default Textbox
