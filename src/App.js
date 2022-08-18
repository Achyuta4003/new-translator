import React, { useEffect, useState } from 'react'
import {  Textbox, Modal, Arrows } from './components'
import axios from 'axios'

const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English")
  const [inputCode, setInputCode] = useState("en")
  const [outputLanguage, setOutputLanguage] = useState("Hindi")
  const [outputCode, setOutputCode] = useState("hi")
  const [languages, setLanguages] = useState(null)
  const [textToTranslate, setTextToTranslate] = useState('')
  const [translatedText, setTranslatedText] = useState('')



  const handleClick = () => {
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
    setInputCode(outputCode)
    setOutputCode(inputCode)
    setTextToTranslate(translatedText)

  }

  const translate = () => {

    const params = new URLSearchParams();
    params.append('q', textToTranslate);
    params.append('source', inputCode);
    params.append('target', outputCode);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate', params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => {
      setTranslatedText(res.data.translatedText)
    })
  };





const getLanguage = () =>{
  axios.get("https://libretranslate.com/languages", { headers: { "accept": "application/json" } })
    .then(res => setLanguages(res.data))

}
  useEffect(() => {
    getLanguage()
  }, [])
  return (
    <div className='app'>
      {
        !showModal &&
        <>
          <Textbox
            styles="input"
            selectedLanguage={inputLanguage}
            setShowModal={setShowModal}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <Textbox
            styles="output"
            selectedLanguage={outputLanguage}
            setShowModal={setShowModal}
            translatedText={translatedText}

          />
          <div className='button-container' onClick={translate}> ➟ </div>
        </>
      }
      {
        showModal && <Modal
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={showModal === "input" ? inputLanguage : outputLanguage}
          setChosenLanguage={showModal === "input" ? setInputLanguage : setOutputLanguage}
         
          setLanguageCode={showModal === "input" ? setInputCode : setOutputCode}

        />
      }

    </div>
  )
}

export default App
