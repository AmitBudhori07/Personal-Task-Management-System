import type { PageLoad } from './$types';
import { getUser } from '../../stores/userStore';
import { redirect } from '@sveltejs/kit';

// The load function will fetch the user profile data and pass it to the page as props
export const load: PageLoad = async () => {
  const user =await getUser();

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
