import  { useEffect, useState } from 'react';
import Search from '../Search';

import List from '../List';



import './App.css';

console.log('List', List);
console.log('Search', Search);
const data =[
  'Mark',
  'Revelation',
  'Colossians',
  '1 Timothy',
  '2 Timothy',
  'Hebrews',
];
function App() {
const [search, setSearch] = useState('');
const [items, setItems] = useState(data);

useEffect(() => {
  setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())));
}, [search])

  return (
    <div className="App">
      <div className="App-header">
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find books:
      </Search>
        <List items={items} />
      </div>
    </div>
  );
};

export default App;
