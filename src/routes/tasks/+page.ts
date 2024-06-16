import type { PageLoad } from './$types';
import { fetchTasks, tasks } from '../../stores/taskStore';
import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

// The load function will fetch the tasks and pass them to the page as props
export const load: PageLoad = async () => {
  const taskdata = get(tasks);
  if (!taskdata || taskdata.length === 0){
    await fetchTasks();
  }
  redirect(302, '/tasks/all');
};
