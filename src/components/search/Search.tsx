/* eslint-disable camelcase */
import { useState } from 'react';
import { searchUser } from 'src/api';
import './search.scss';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [users, setUsers] = useState([{ username: '', user_id: '' }] as [
    { username: string; user_id: string }
  ]);
  const history = useHistory();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();

      const response = await searchUser(event.target.value);
      const data = await response.json();

      if (data.message) {
        setUsers([{ username: '', user_id: '' }]);
        return;
      }

      setUsers(data.users);
    } catch (error) {
      setUsers([{ username: '', user_id: '' }]);
    }
  };

  const handleUserClick = async (userId: string) => {
    history.push(`/profile/${userId}`);
  };

  return (
    <div className="border flex items-center justify-center search-container">
      <input
        className="border-none focus:outline-none"
        type="search"
        onChange={(event) => handleSearch(event)}
      />

      {users.length > 0 && users[0].username !== '' && (
        <section className="search-result bg-gray-50">
          {users?.map((user) => (
            <button
              key={user.user_id || Math.random()}
              type="button"
              onClick={() => {
                handleUserClick(user.user_id);
              }}
            >
              {user.username}
            </button>
          ))}
        </section>
      )}
    </div>
  );
};

export default Search;
