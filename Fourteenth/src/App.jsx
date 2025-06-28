import './App.css';
import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';

const usersList = [
  'John Doe',
  'Jane Smith',
  'Alice Johnson',
  'Michael Brown',
  'Charlie Davis',
  'Jordan Lee',
  'Mark Taylor'
];

function App() {
  const [query, setQuery] = useState('');
  const [userListFilter, setUserListFilter] = useState(usersList);

  /* Debounce Filter function for UserList */
  const debouncedFilter = useMemo(() =>
    debounce((searchText) => {
      const result = usersList.filter((user) =>
        user.toLowerCase().includes(searchText.toLowerCase())
      );
      setUserListFilter(result.length > 0 ? result : []);
    }, 300), // 300ms debounce delay
    []);

  useEffect(() => {
    debouncedFilter(query);

    return () => debouncedFilter.cancel(); // Use cancel() instead of clear()
  }, [query, debouncedFilter]); // Include debouncedFilter in dependencies

  return (
    <div>
      <h1>Debounce filter UserList</h1>
      {/* Input Field To check DEBOUNCE Filter */}
      <input
        type='text'
        placeholder='Type anything'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      
        {/* {debouncedFilter.length >0 ? (

          <ul>
         {debouncedFilter.map((id,user)=>(
           <li key={id}>{user}</li>
         ))}
         </ul>
        ):(<p>No User Found</p>)} */}
    
    {userListFilter.length > 0 ? (
        <ul style={{listStyle: 'none'}}>
          {userListFilter.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No User Found</p>
      )}
    </div>
  );
}

export default App;