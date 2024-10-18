import {useContext} from 'react'
import {SettingsContext} from '../context/SettingsContext';

import Second from './Second';

export function First() {
  const {language, theme, count, setCount} = useContext(SettingsContext)

  return (
    <div style={{border: '5px solid red', padding: 5, margin: 5}}>
      <h2>First</h2>

      <p><strong>Language:</strong> {language}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Count:</strong> {count}</p>

      <button onClick={() => {setCount(count + 1)}}>Zvetsit</button>
      <hr/>

      <Second />
    </div>
  );
}

export default First;