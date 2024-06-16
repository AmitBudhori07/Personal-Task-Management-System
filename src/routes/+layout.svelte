<script lang="ts">
	import { onMount } from 'svelte';
	import { clearUser, user } from '../stores/userStore';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import { user as userStore} from '../stores/userStore';

	let userInfo : any;
  
	// Subscribe to user store to get user data
	user.subscribe(value => {
	  userInfo = value;
	});
  
	// Handle logout
	const handleLogout = () => {
	  clearUser();
	  goto('/login');
	};
  
	// On mount, check if user is authenticated
	onMount(() => {
		const user = get(userStore);
		if (!user) {
		goto('/login');
	  }
	});
  </script>
  
  <header>
	<nav>
	  <a href="/">Home</a>
	  <a href="/about">About</a>
	  <a href="/tasks">Task Manager</a>
	  <a href="/profile">Profile</a>
	  {#if userInfo}
		<span>Welcome, {userInfo.name}</span>
		<button on:click={handleLogout}>Logout</button>
	  {/if}
	</nav>
  </header>
  
  <slot></slot>
  
  <footer>
	<p>NAGP 2024 Personal Task Manager</p>
  </footer>
  
  <style>
	header, footer {
	  background-color: #f8f9fa;
	  padding: 1rem;
	  text-align: center;
	}
	nav a {
	  margin: 0 1rem;
	  text-decoration: none;
	  color: #007bff;
	}
	nav span {
	  margin: 0 1rem;
	}
	button {
	  margin-left: 1rem;
	}
  </style>
  