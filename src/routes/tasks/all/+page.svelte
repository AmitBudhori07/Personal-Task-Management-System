<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import TaskCard from '../../../components/TaskCard.svelte';
    import { filteredTasks, filterTasks } from '../../../stores/taskStore';
    import TaskHeader from '../../../components/TaskHeader.svelte';
    
    let taskList: any[] = [];
  
    onMount(async() => {
      filterTasks(); 
    });

  const unsubscribe = filteredTasks.subscribe(value => {
    taskList = value;
  });

  onDestroy(() => {
    unsubscribe();
    filterTasks();
  });
  </script>
  
  <h1>All Tasks</h1>
  <TaskHeader/>
  {#each taskList as task}
    <TaskCard {task} />
  {/each}
  
  <style>
    h1 {
      color: #333;
    }
  </style>
  