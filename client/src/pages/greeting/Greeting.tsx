import { ToastContainer } from 'react-toastify';

import { GreetingWrapper } from './styles';
import { Button } from '../../components';
import { useLogoutMutation } from './useLogoutMutation';
import { useAuthMeQuery } from './useAuthMe';
import { Spinner } from '../../notifications/Spinner';

export function Greeting() {
  const { isLoading: isLoadingAuthMe } = useAuthMeQuery();
  const { mutate, isLoading, isSuccess } = useLogoutMutation();

  if (isLoadingAuthMe) {
    return <Spinner />;
  }

  const userName = localStorage.getItem('userName');

  const handleLogoutClick = () => {
    mutate();
  };

  return (
    <GreetingWrapper>
      <ToastContainer limit={1} />
      <Button
        type="button"
        onClick={handleLogoutClick}
        disabled={isLoading || isSuccess}
        isLoading={isLoading}
      >
        Logout
      </Button>

      <h2>Congratulations {userName}, you have successfully logged&nbsp;in!</h2>
    </GreetingWrapper>
  );
}
