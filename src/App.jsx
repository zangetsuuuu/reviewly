import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </HelmetProvider>
  );
};

export default App;
