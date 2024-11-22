import "./App.css";
import { MemoryRouter } from "./contexts/MemoryRouter/MemoryRouter";
import Router from "./component/Router";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";
import Fallback from "./component/Fallback";

function App() {
  const routes = [
    {
      path: "/",
      element: <PageOne />,
    },
    {
      path: "/two",
      element: <PageTwo />,
    },
    {
      path: "/three",
      element: <PageThree />,
    },
  ];

  return (
    <MemoryRouter>
      <div>
        <h1>Root</h1>
        <Router routes={routes} fallback={<Fallback />} />
      </div>
    </MemoryRouter>
  );
}

export default App;
