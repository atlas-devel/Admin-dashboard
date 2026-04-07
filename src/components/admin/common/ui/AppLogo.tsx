import { Link } from "react-router-dom";
import useSidebar from "../../../../hooks/useSidebar";
function AppLogo({ variants }: { variants: string }) {
  const { isOpen } = useSidebar();
  if (!isOpen) return;
  return (
    <Link to="/" className={`${variants} `}>
      <span className="text-secondary-color uppercase ">Urugo</span>
      <span className="max-md:hidden text-primary-text uppercase ml-1">
        Admin
      </span>
    </Link>
  );
}

export default AppLogo;
