import React, { createContext } from "react";
import type { RealEstateUser } from "../../@types/types";

export const UserManagementContext = createContext<
  | {
      users: RealEstateUser[];
      setUsers: React.Dispatch<React.SetStateAction<RealEstateUser[]>>;
    }
  | undefined
>(undefined);

