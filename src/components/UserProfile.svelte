<script lang="ts">
  export let user: {
    id: number;
    name: string;
    email: string;
  } | null;
</script>

<div class="profile">
  <h1>User Profile</h1>
  <div class="profile-info">
    <p><strong>Name:</strong> {user && user.name}</p>
    <p><strong>Email:</strong> {user && user.email}</p>
  </div>
</div>

<style>
  .profile {
    padding: 2rem;
  }
  .profile-info {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 4px;
  }
  .profile-info p {
    margin: 0.5rem 0;
  }
</style>
