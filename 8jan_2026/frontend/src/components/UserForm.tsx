import { useState } from "react";
import { createUser } from "../services/userApi";
import "../styles/user_form.css";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async () => {
    if (!name || !email) return;
    await createUser({ name, email });
    setName("");
    setEmail("");
    window.location.reload(); // OK for now
  };

  return (
    <div className="user-form">
      <h3>Add User</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={submit}>Create</button>
    </div>
  );
}
