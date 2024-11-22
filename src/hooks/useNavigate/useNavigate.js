const useNavigate = () => {
  const navigate = (href) => {
    const navigationEvent = new CustomEvent("push-history", {
      detail: {
        path: href,
      },
    });

    window.dispatchEvent(navigationEvent);
  };

  return navigate;
};

export default useNavigate;
