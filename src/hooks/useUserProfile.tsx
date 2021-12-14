import React, { useState } from "react";
import Contractor from "types/Contractor";
import User from "types/User";

const useUserProfile = ({}) => {
  const [userProfile, setUserProfile] = useState<User | Contractor>();
};

export default useUserProfile;
