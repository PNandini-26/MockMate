import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import  Container  from "./container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import ProfileContainer  from "./profile-container";
import  ToggleContainer  from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
 {/* ✅ Logo section */}
    <NavLink to="/" className="flex items-center gap-2">
      {/* Circular gradient icon with M */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl 
        bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700 
        text-white font-bold text-lg shadow-md">
        M
      </div>
      {/* MockMate text with AI-style gradient */}
      <span className="text-2xl font-extrabold 
        bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 
        bg-clip-text text-transparent tracking-wide">
        MockMate
      </span>
    </NavLink>

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />

            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;