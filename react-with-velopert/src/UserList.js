import React from "react";

export default function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.uid} onRemove={onRemove} />
      ))}
    </div>
  );
}

function User({ user, onRemove }) {
  const { username, email, uid } = user;
  return (
    <div>
      <div>
        <b>{username}</b> <span>({email})</span>
        <button onClick={() => onRemove(uid)}>삭제</button>
      </div>
    </div>
  );
}
