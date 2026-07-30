import { Link, useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface SectionLinkProps {
  /** Hash de la sección, p. ej. "#contacto" */
  hash: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SectionLink({ hash, children, className, onClick }: SectionLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();

    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }

    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Link to={`/${hash}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
