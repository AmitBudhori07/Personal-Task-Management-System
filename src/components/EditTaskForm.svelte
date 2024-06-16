<script lang="ts">
    import { onMount } from 'svelte';
    import { tasks, updateTask, addTask } from '../stores/taskStore';
    import { get } from 'svelte/store';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';

    export let taskId: string | null = null;
    let task = writable({
    id: '',
    userId: '',
    title: '',
    completed: false,
    category: '',
    priority: 1,
    dueDate: ''
  });
  
    // Fetch the task details when the component mounts
    onMount(() => {
      const taskdata = get(tasks);
      const existingTask = taskdata.find((t) => t.id == taskId);
      if (existingTask) {
        task.set({ ...existingTask });
      }
    });
  
    const handleUpdate = (event: Event) => {
      event.preventDefault();
      if(taskId){
        updateTask($task);
      }
      else{
        addTask($task);
      }
  
      goto('/tasks');
    };
  </script>

  <form on:submit={handleUpdate}>
    <label>
      Title:
      <input type="text" bind:value={$task.title} required />
    </label>
    <label>
      Category:
      <select bind:value={$task.category} required>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="errands">Errands</option>
      </select>
    </label>
    <label>
      Status:
      <input type="checkbox" bind:checked={$task.completed} />
    </label>
    <label>
      Priority:
      <input type="number" bind:value={$task.priority} required />
    </label>
    <label>
      Due Date:
      <input type="date" bind:value={$task.dueDate} required>
    </label>
    <button type="submit">Submit</button>
  </form>