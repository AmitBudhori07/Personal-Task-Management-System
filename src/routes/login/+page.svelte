<script lang="ts">
    import { goto } from '$app/navigation';
    import { setUser } from '../../stores/userStore';
    import { writable } from 'svelte/store';
  
    // Local state for form inputs
    let email = '';
    let password = '';
  
    // Error message store
    const errorMessage = writable<string | null>(null);
  
    const handleLogin = async (event: Event) => {
      event.preventDefault();
      errorMessage.set(null);
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to login');
        }
  
        const users = await response.json();
        const user = users.find((u: any) => u.email === email);
  
        if (user) {
          if (password === 'password') {
            setUser({ id: user.id, name: user.name, email: user.email });
            goto('/tasks');
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      } catch (error) {
        errorMessage.set(error.message);
      }
    };
  </script>
  
  <div class="login">
    <h1>Login</h1>
    {#if $errorMessage}
      <p class="error">{$errorMessage}</p>
    {/if}
    <form on:submit={handleLogin}>
      <label>
        Email:
        <input type="email" bind:value={email} required />
      </label>
      <label>
        Password:
        <input type="password" bind:value={password} required />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
  
  <style>
    .login {
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      margin-bottom: 1rem;
      text-align: center;
    }
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    label {
      margin-bottom: 0.5rem;
    }
  
    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      padding: 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    .error {
      color: red;
      margin-bottom: 1rem;
    }
  </style>
  