import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import NavigationRoutes from './NavigationRoutes';
import { Login } from '../pages';

const RootRouter = () => {
  const accessToken = useAuthStore(state => state.auth?.token);

  console.log(accessToken);

  return (
    <BrowserRouter>
      <Routes>
        {accessToken ? (
          <Route path='/*' element={<NavigationRoutes />} />
        ) : (
          <Route path='/*' element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter