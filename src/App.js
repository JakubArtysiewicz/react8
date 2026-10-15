import { useState } from 'react';
import './App.css';

function App() {
  const [search,setSearch] = useState("")
  const produkty = [
    { id: 1, name: "Koszulka", cena:10},
    { id: 2, name: "Bluza", cena:20},
    { id: 3, name: "Spodnie", cena:30},
  ]
  const produktyWyszukanie = produkty.filter(
    (produkt) =>
      produkt.name
    .toLowerCase()
    .includes(search.trim().toLowerCase())
  )
  return (
    <div className="App">
      <h1>ABC</h1>
      <input onChange={(e)=>setSearch(e.target.value)} />
      <ol>
        {produktyWyszukanie.map((wartosc, index) => (
          <li key={wartosc.id}> {wartosc.name} {wartosc.cena}zł </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
