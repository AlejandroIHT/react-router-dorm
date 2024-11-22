import { useEffect } from "react";
import { useMemoryRouter } from "../../contexts/MemoryRouter/MemoryRouter";

const Router = ({ routes, fallback }) => {
  const navigation = useMemoryRouter();

  const onLocationChange = ({ detail }) => {
    navigation.setHistory((prev) => [...prev, detail.path]);
  };

  useEffect(() => {
    window.addEventListener("push-history", onLocationChange);

    return () => window.removeEventListener("push-history", onLocationChange);
  }, []);

  const route = routes.find(
    (route) => route.path === navigation.history[navigation.history.length - 1]
  );

  return route?.element || fallback;
};

export default Router;
