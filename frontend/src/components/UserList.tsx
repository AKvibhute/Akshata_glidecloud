import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userApi";
import type { User } from "../types/User";
import "../styles/user_list.css";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const data = await getUsers(); // Fetch data from backend
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="user-info-container">
      <h4 className="user-info-title">Users Information</h4>

      {loading && <p>Loading...</p>}

      {!loading && users.length === 0 && (
        <p className="user-info-empty">No users found</p>
      )}

      <div className="user-list">
        {users.map((u) => (
          <div key={u.id} className="user-card">
            <div className="user-details">
              <div className="user-name">{u.name}</div>
              <div className="user-email">{u.email}</div>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteUser(u.id).then(loadUsers)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
