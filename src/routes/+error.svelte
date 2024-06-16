<!-- src/routes/+error.svelte -->
<script lang="ts">
    export let error: Error;
    export let status: number;
  </script>
  
  <h1>{status}</h1>
  <p>{error && error.message}</p>
  
  <style>
    h1 {
      color: red;
    }
  </style>
  