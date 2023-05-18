import { useSelector } from 'react-redux';
import {
  getUserName,
  getIsLoggedIn,
  getIsRefreshing,
} from 'redux/auth/selectors';

export default function useAuth() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userName = useSelector(getUserName);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
  };
}
