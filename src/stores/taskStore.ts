import { writable, derived, get } from 'svelte/store';

// Task type definition
type Task = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  category: string;
  priority: number,
  dueDate: string
};

// Writable store for tasks
const tasks = writable<Task[]>([]);
const filteredTasks = writable<Task[]>([]);
let ascendingDueDate = false;
let asscendingPriority = false;

// Derived store to filter tasks based on criteria
function filterTasks(category: string = '', dueDate: string = '') {
  tasks.update((currentTasks : Task[]) => {
    const filtered = currentTasks.filter((task) => {
      return (
        (category ? task.category === category : true) &&
        (dueDate ? task.dueDate === dueDate : true) 
      );
    });
    filteredTasks.set(filtered);
    return currentTasks;
  });
}

function addTask(task: Task) {
  let taskdata = get(tasks).sort((a, b) => a.id - b.id);
  task.id = taskdata[taskdata.length-1].id + 1; 
  tasks.update((currentTasks : Task[]) => {
    const updatedTasks = [...currentTasks, task];
    return updatedTasks;
  })
  filterTasks();
  sortTasks(null);
}
// Function to set tasks and apply default sorting by date
const setTasks = (newTasks: Task[]) => {
  tasks.set(newTasks);
  filterTasks();
  sortTasks(null); // Default sorting by date
};

// Function to sort tasks by date or priority
const sortTasks = (criteria: 'date' | 'priority' | null) => {
  if(criteria == 'date'){
    ascendingDueDate = !ascendingDueDate
  }
  else if(criteria == 'priority'){
    asscendingPriority = !asscendingPriority
  }
  filteredTasks.update($tasks => {
    return [...$tasks].sort((a, b) => {
      if (criteria === 'date') {
        return ascendingDueDate ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime() :
         new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      } else if(criteria == 'priority') {
        return asscendingPriority ? (a.priority || 0) - (b.priority || 0) : (b.priority || 0) - (a.priority || 0);
      }
      else{
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
    });
  });
};

// Function to fetch tasks from the API
const fetchTasks = async () => {
  try {
    const response = await fetch('https://jsonserver-gilt-rho.vercel.app/data');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const data = await response.json();
    // Assuming the API returns tasks with the necessary fields
    const tasks: Task[] = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      category: item.category, // Placeholder for category
      completed: item.completed,
      dueDate: item.dueDate,
      priority: item.priority
    }));
    setTasks(tasks);
  } catch (error) {
    console.error(error);
  }
};

function deleteTask(taskId: number) {
  tasks.update((currentTasks) => {
    const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
    return updatedTasks;
  });
  filterTasks(); // Update filtered tasks after deleting a task
}

function updateTask(updatedTask: Task) {
  tasks.update((currentTasks: Task[]) => {
    const updatedTasks = currentTasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
    return updatedTasks;
  });
  filterTasks();
}

// Exporting the tasks and filteredTasks stores, and the functions to interact with them
export { tasks, filteredTasks, setTasks, filterTasks, sortTasks, fetchTasks, deleteTask, updateTask, addTask };
