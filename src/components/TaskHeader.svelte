<script lang="ts">
    import { goto } from '$app/navigation';
    import { deleteTask, filterTasks, sortTasks } from '../stores/taskStore';

  let category = '';
  let dueDate = '';
  const handleFilter = () => {
      filterTasks(category, dueDate);
  };
  
  const handleSort = (criteria: 'date' | 'priority') => {
      sortTasks(criteria);
  };

    
  const addTask = () => {
    goto(`/tasks/add`);
  };

</script>

<div>
    <div class="filters">
      <select bind:value={category}>
        <option value="">All Categories</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="errands">Errands</option>
      </select>
  
      <input type="date" bind:value={dueDate} />
  
      <button on:click={handleFilter}>Filter</button>
    </div>
  
    <div class="sorting">
      <button on:click={() => handleSort('date')}>Sort by Date</button>
      <button on:click={() => handleSort('priority')}>Sort by Priority</button>
    </div>
  
    <div>
      <button on:click={addTask}>add</button>
    </div>
  </div>

<style>
    .filters, .sorting {
      margin-bottom: 1rem;
    }
</style>
