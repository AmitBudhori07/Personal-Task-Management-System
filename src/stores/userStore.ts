import { writable } from 'svelte/store';

// User type definition
type User = {
  id: number;
  name: string;
  email: string;
};

// Writable store for user data
const user = writable<User | null>(null);

// Function to set user data
const setUser = (newUser: User) => {
  user.set(newUser);
};

// Function to clear user data (logout)
const clearUser = () => {
  user.set(null);
};

// Function to get user data
const getUser = async() => {
  let currentUser: User | null = null;
  await user.subscribe(value => {
    currentUser = value;
  })();
  return currentUser;
};

// Exporting the user store and functions
export { user, setUser, clearUser, getUser };
