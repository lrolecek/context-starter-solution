import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

export const User = () => {

  const {user, logIn, logOut, changeCurrency} = useContext(UserContext)

  return (
    <div style={{border: '5px solid orange', margin: '1em', padding: '1em'}}>
      <h3>User</h3>

      {user.isLoggedIn && (
        <>
          <h4>{user.name}</h4>
          <p>
            Currency: {user.currency}

            <button onClick={() => { changeCurrency('Kč')}}>Kč</button>
            <button onClick={() => { changeCurrency('EUR')}}>EUR</button>
            <button onClick={() => { changeCurrency('USD')}}>USD</button>

          </p>
        </>
      )}

      {
        user.isLoggedIn
        ? <button onClick={logOut}>Odhlásit</button>
        : <button onClick={logIn}>Přihlásit</button>
      }
    </div>
  );
}

export default User;