import useNavigate from "../../hooks/useNavigate";

const PageOne = () => {
  const navigate = useNavigate();

  const handleTwoClick = () => {
    navigate("/two");
  };

  const handleFourClick = () => {
    navigate("/four");
  };

  return (
    <div>
      <h3>Page One</h3>
      <button onClick={handleTwoClick}>Go to Page Two</button>
      <button onClick={handleFourClick}>Go to Page Four</button>
    </div>
  );
};

export default PageOne;
