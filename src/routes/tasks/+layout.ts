import type { LayoutLoad } from './$types';
import { user as userStore} from '../../stores/userStore';
import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ parent }) => {
  const user = get(userStore);

  // If user is not authenticated, redirect to login page
  if (!user) {
    redirect(302, '/login')
  }

  return {
    props: {
      user
    }
  };
};
