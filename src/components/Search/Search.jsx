import React from 'react';

const Searchbar = () => {
  return (
    <div className="search">
    <div className="searchForm">
      <input
        type="text"
        placeholder="Найдите пользователя"
        /*onKeyDown={handleKey}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
    {err && <span>User not found!</span>}
    {user && (
      <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>*/
      />
    </div>
  </div>
);
};

export default Searchbar;