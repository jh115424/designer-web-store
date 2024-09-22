

import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
const profiles = [1, 2, 3, 4, 5];

  return (
   
      <div className="profilesContainer">
           <div className="profilesList">
            {profiles.map((profile) => (
           <NavLink
             key={profile}
             to={`/profiles/${profile}`}
             className={({ isActive }) => {
               return isActive ? "text-primary-700" : "";
             }}
           >
             Profile {profile}
           </NavLink>
      ))}

      </div>
  
      <Outlet />
    </div>
  );
}