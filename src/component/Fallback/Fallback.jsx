import useNavigate from "../../hooks/useNavigate";

const Fallback = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>Page Not Found</h3>
      <button onClick={handleBackClick}>Go to Page One</button>
    </div>
  );
};

export default Fallback
