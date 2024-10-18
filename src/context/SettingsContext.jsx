import {useState, createContext} from 'react'

export const SettingsContext = createContext(null)


export function SettingsProvider({children}) {
  const [language, setLanguage] = useState('cz')
  const [theme, setTheme] = useState('dark')
  const [count, setCount] = useState(0)

  return (
    <SettingsContext.Provider value={{
      language,
      theme,
      count, setCount
    }}>
      {children}
    </SettingsContext.Provider>
  )

}
