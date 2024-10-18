# React Context

Context poskytuje způsob, jak předávat data/stav do komponent, aniž bychom museli hodnoty posílat přes props skrze všechny úrovně stromu do sebe vnořených komponent.

Hlavní účel contextu je vyhnout se tzv. *props drilling*.

Context je způsob, jak se někde existující stav sdílí s ostatními komponentami v aplikaci.

---

## Vytvoření kontextu

```jsx
import { createContext } from 'react';

export const MyContext = createContext(null);
```

Ideálně si pro kontext vytvoříme nový soubor, ze kterého vytvořený kontext exportujeme, abychom ho mohli importovat kdekoliv ho budeme potřebovat.

---

## Sdílení kontextu pomocí provideru

```jsx
<MyContext.Provider value={ hodnota }>
  ... komponenty
</MyContext.Provider>
```

Do context provideru zabalíme všechny komponenty, se kterými chceme sdílet data.

`hodnota` jsou data, která chceme sdílet. Obvykle jde o objekt obsahující více vlastností (hodnot) a metod.

Obvykle chceme sdílet stav rodičovské komponenty.

```jsx
const [count, setCount] = useState(0);

<MyContext.Provider value={{count, setCount}}>
  ...komponenty
</MyContext.Provider>
```

---

## Získání hodnot z kontextu

V komponentě, kde chceme kontext použít, uvedeme:

```jsx
import { useContext } from 'react';
import { MyContext } from './myContext.jsx';

const { count, setCount } = useContext(MyContext);
```

---

## Zjednodušení použití kontextu pomocí vlastního hooku

Abychom v komponentách nemuseli stále importovat `useContext` z Reactu a pak ještě náš kontext, můžeme si napsat vlastní hook, který nám použití zjednoduší.

Do souboru `mycontext.jsx` přidáme:

```jsx
export const useMyContext = () => useContext(MyContext);
```

A pak v komponentách můžeme použít jen:

```jsx
import { useMyContext } from './mycontext.jsx';

const { count, setCount } = useMyContext();
```

---

## Vlastní provider

Protože obvykle chceme přes kontext sdílet více než jednu hodnotu, víc než jeden stav, je pohodlnější, když si napíšeme vlastní komponentu, která v soubě bude obsahovat hodnoty stavu, které chceme sdílet, i provider, do kterého chceme hodnoty předat.

```jsx
export function MyContextProvider({children}) {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{count, setCount}}>
      {children}
    </MyContext.Provider>
  )
}
```

A potom v naší aplikaci použijeme jenom:

```jsx
<MyContextProvider>
  ...komponenty, se kterými chceme hodnoty sdílet
</MyContextProvider>
```

---

## Reducer

Pokud pro změnu stavu potřebujeme nějakou složitější logiku, často je přehlednější a jednodušší použít tzv. **reducer**.

Reducer ukládá hodnotu podobně jako stav, ale pro změnu stavu voláme tzv. **dispatch** funkci, do které předáme, jakou akci chceme se stavem provést.

Místo běžného:

```jsx
import { useState } from 'react';

const [tasks, setTasks] = useState(initialTasks);
```

Použijeme:

```jsx
import { useReducer } from 'react';

const [tasks, dispatch] = useReducer(reducerFn, initialTasks);
```

Když chceme stav změnit, voláme funkci `dispatch` a jako parametr předáme tzv. **akci**. To je obvykle objekt, který má vlastnost `type` s názvem akce, kterou chceme provést. Další vlastnosti objektu mohou obsahovat hodnoty, které chceme do akce předat, například:

```jsx
dispatch({
  type: 'added',
  newTask: {...}
})
```

*Reducer function*, která akce zpracovává, musí vždy vrátit novou hodnotu stavu a obvykle vypadá nějak takto:

```jsx
function tasksReducer(state, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...state,
        action.newTask
      ];
    }
    case 'deleted': {
      return state.filter(task => task.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```