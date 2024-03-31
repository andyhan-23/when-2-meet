import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <img src={logo} className="w-20 object-fit m-4" alt="logo_image" onClick={handleClick} />
    </div>
  );
};

export default Logo;
