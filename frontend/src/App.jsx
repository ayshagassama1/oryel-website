import { Outlet } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import SiteInternetSophrologue from './pages/SiteInternetSophrologue';
import SiteInternetGiteChambreHotes from './pages/SiteInternetGiteChambreHotes';
import ChatbotIaSiteWeb from './pages/ChatbotIaSiteWeb';
import CreationSiteInternetMetz from './pages/CreationSiteInternetMetz';
import CreationSiteInternetLuxembourg from './pages/CreationSiteInternetLuxembourg';
import Tarifs from './pages/Tarifs';
import Demos from './pages/Demos';
import APropos from './pages/APropos';
import NotFound from './pages/NotFound';

function RootLayout() {
  return (
    <>
      <CookieConsent />
      <Outlet />
    </>
  );
}

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mentions-legales', element: <MentionsLegales /> },
      { path: 'site-internet-sophrologue', element: <SiteInternetSophrologue /> },
      { path: 'site-internet-gite-chambre-hotes', element: <SiteInternetGiteChambreHotes /> },
      { path: 'chatbot-ia-site-web', element: <ChatbotIaSiteWeb /> },
      { path: 'creation-site-internet-metz', element: <CreationSiteInternetMetz /> },
      { path: 'creation-site-internet-luxembourg', element: <CreationSiteInternetLuxembourg /> },
      { path: 'tarifs', element: <Tarifs /> },
      { path: 'demos', element: <Demos /> },
      { path: 'a-propos', element: <APropos /> },

      { path: '404', element: <NotFound /> },

      // Filet cote client uniquement. Ne doit jamais pointer vers <Home />.
      { path: '*', element: <NotFound /> },
    ],
  },
];