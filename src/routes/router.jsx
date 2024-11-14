import { createBrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { routes } from '@/routes/data';

const withHelmet = ({ element, title, description }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
    </Helmet>
    {element}
  </>
);

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: withHelmet(route),
  })),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export { router };
