import {useContext} from 'react'
import {SettingsContext} from '../context/SettingsContext';


export function Second() {
  const {language, theme, count, setCount} = useContext(SettingsContext)

  return (
    <div style={{border: '5px solid dodgerblue', padding: 5, margin: 5}}>
      <h2>Second</h2>

      <p><strong>Language:</strong> {language}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Count:</strong> {count}</p>

      <button onClick={() => {setCount(count - 1)}}>Zmensit</button>
    </div>
  );
}

export default Second;