<script lang="ts">
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { user } from '../../stores/userStore';
    import UserProfile from '../../components/UserProfile.svelte';
    let userData: {
      id: number;
      name: string;
      email: string;
    } | null;
    onMount(async() => {
      userData = get(user);
    });
  </script>
  
  <UserProfile user = {userData}/>