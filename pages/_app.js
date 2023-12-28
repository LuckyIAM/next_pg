import {useState, createContext} from 'react'
import AppContext from '@/Context/AppContext'
import './globals.css'

export default function App({ Component, pageProps }) {
    const [lang, setLang] = useState('ru')
    const [numberPage, setNumberPage] = useState(1)
    return (
      <AppContext.Provider value = {{
        lang, 
        setLang,
        numberPage, 
        setNumberPage
      }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    ) 
  }
