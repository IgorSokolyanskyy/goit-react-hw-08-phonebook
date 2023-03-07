import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar';
import { Suspense } from 'react';
import Loader from './Loader';

export default function Layout() {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100vh',
      }}
    >
      <ResponsiveAppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
