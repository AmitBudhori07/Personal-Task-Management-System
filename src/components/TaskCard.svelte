<script lang="ts">
    import { goto } from '$app/navigation';
    import { deleteTask } from '../stores/taskStore';

  export let task: {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
    category: string;
    priority: number;
    dueDate: string
  };

  const hadnleDelete = () => {
    deleteTask(task.id);
  };

  const editTask = () => {
    goto(`/tasks/${task.id}/edit`);
  };
  console.log(task);

</script>

<div class="task-card">
  <h2>{task.title}</h2>
  <p>Category: {task.category}</p>
  <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
  <p>Priority: {task.priority}</p> 
  <p>dueDate: {task.dueDate}</p>
  <button on:click={editTask}>Edit</button>
  <button on:click={hadnleDelete}>Delete</button>
</div>

<style>
  .task-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }
  h2 {
    margin: 0 0 0.5rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
  button {
    margin-right: 0.5rem;
  }
</style>
