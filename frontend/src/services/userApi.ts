// src/services/userApi.ts
import type { User } from "../types/User";

const BASE_URL = "http://localhost:8080/users"; // Backend URL

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const createUser = async (user: Omit<User, "id">) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Failed to create user");
};

export const deleteUser = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete user");
};
