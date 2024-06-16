<script lang="ts">
    import EditTaskForm from '../../../../components/EditTaskForm.svelte';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
  
    const taskId = get(page).params.id;
  </script>
  
  <EditTaskForm {taskId} />
  