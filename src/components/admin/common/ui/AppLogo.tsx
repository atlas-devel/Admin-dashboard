import { Link } from "react-router-dom";
function AppLogo({ variants }: { variants: string }) {
  return (
    <Link to="/" className={`${variants} `}>
      <span className="text-secondary-color uppercase ">Urugo</span>
      <span className="max-md:hidden text-primary-text uppercase ml-1 t ">
        Admin
      </span>
    </Link>
  );
}

export default AppLogo;
