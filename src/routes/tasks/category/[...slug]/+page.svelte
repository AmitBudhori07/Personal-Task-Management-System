<script lang="ts">
    import { page } from '$app/stores';
    import { onDestroy } from 'svelte';
    import TaskCard from '../../../../components/TaskCard.svelte';
    import { filteredTasks } from '../../../../stores/taskStore';

    let category: string;
    let taskList: any[] = [];
    let unsubscribe: any;
    $: {
      category = $page.params.slug; 
      unsubscribe = filteredTasks.subscribe(value => {
       taskList = value.filter(task => task.category === category);
    });
    }

  onDestroy(() => {
    unsubscribe();
  });
  
  </script>
  
  <h1>Tasks in {category}</h1>
  
  {#each taskList as task}
    <TaskCard {task} />
  {/each}
  
  <style>
    h1 {
      color: #333;
    }
  </style>
  