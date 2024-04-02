import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-24 items-center justify-center ">
      <img src={logo} className="w-32" alt="logo_image" onClick={handleClick} />
    </div>
  );
};

export default Logo;
