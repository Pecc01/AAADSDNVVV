
export interface User {
  username: string;
  password?: string; // Optional for display purposes, but needed for auth
  createdAt: string;
}

const USERS_STORAGE_KEY = 'ship-easy-users';

const INITIAL_USERS: User[] = [
  {
    username: "admin",
    password: "pecclindo1", // In a real app, this should be hashed!
    createdAt: new Date().toLocaleDateString('pt-BR'),
  }
];

export const getUsers = (): User[] => {
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_USERS));
    return INITIAL_USERS;
  }
  const users = JSON.parse(stored);
  
  // Ensure default admin always has the correct password (force update)
  const adminIndex = users.findIndex((u: User) => u.username === "admin");
  if (adminIndex >= 0 && users[adminIndex].password !== "pecclindo1") {
    users[adminIndex].password = "pecclindo1";
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }
  
  return users;
};

export const createUser = (user: User): boolean => {
  const users = getUsers();
  if (users.some(u => u.username === user.username)) {
    return false; // User already exists
  }
  users.push(user);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  return true;
};

export const deleteUser = (username: string): boolean => {
  let users = getUsers();
  // Prevent deleting the last user or the main admin if we wanted to restrict it
  if (users.length <= 1) return false; 
  
  users = users.filter(u => u.username !== username);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  return true;
};

export const loginUser = (username: string, password: string): boolean => {
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);
  return !!user;
};
