import {useState, createContext} from 'react'

export const UserContext = createContext(null)

export function UserProvider({children}) {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: '',
    currency: 'Kč',
  })

  const logIn = () => {
    setUser({
      isLoggedIn: true,
      name: 'Alena Nováková',
      currency: 'Eur',
    })
  }

  const logOut = () => {
    if (user.isLoggedIn) {
      setUser({
        isLoggedIn: false,
        name: '',
        currency: 'Kč',
      })
    } else {
      console.log('Uzivatel se nemuze odhlasit, protoze neni prihlaseny')
    }
  }

  const changeCurrency = (currency) => {
    setUser({
      ...user,
      currency,
    })
  }

  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut,
      changeCurrency,
    }}>
      {children}
    </UserContext.Provider>
  )
}