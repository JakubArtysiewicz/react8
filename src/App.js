import { useState } from 'react';
import './App.css';

function App() {
  const [search,setSearch] = useState("")
  const [cenaSearchLower,setCenaSearchLower] = useState(0)
  const [cenaSearchHigher,setCenaSearchHigher] = useState(Infinity)
  const [sortowanie,SetSortowanie] = useState(null)
  const produkty = [
    { id: 1, name: "Koszulka", cena:10},
    { id: 2, name: "Bluza", cena:20},
    { id: 3, name: "Spodnie", cena:30},
  ]
  const produktyWyszukanie = produkty.filter(
    (produkt) =>
      produkt.name
    .toLowerCase()
    .includes(search.trim().toLowerCase()) &&
    produkt.cena >= cenaSearchLower &&
    produkt.cena <= cenaSearchHigher
  )
  return (
    <div className="App">
      <h1>ABC</h1>
      <button onClick={(e)=>sortowanie ? false : SetSortowanie(null)}>{sortowanie === null ? "R" : sortowanie ? "R" : "B"}</button>
      <input onChange={(e)=>setSearch(e.target.value)} />
      <p>cena:</p>
      <input placeholder='od' type='number' onChange={(e)=>setCenaSearchLower(e.target.value === "" ? 0 : e.target.value)}/>zł
      <input placeholder='do' type='number' onChange={(e)=>setCenaSearchHigher(e.target.value === "" ? Infinity: e.target.value)} />zł
      <ol>
        {produktyWyszukanie.map((wartosc, index) => (
          <li key={wartosc.id}> {wartosc.name} {wartosc.cena}zł </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
