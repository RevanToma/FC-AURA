import { useQuery } from "@apollo/client";
import { GET_USER_SKILLS } from "../Mutations/Mutations";
import { useEffect, useState } from "react";

const useUserSkills = () => {
  const { data, refetch } = useQuery(GET_USER_SKILLS);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    if (data && data.me) {
      setSelectedSkills(data.me.skills);
    }
    refetch();
  }, [data]);

  return { selectedSkills, setSelectedSkills, refetch };
};

export default useUserSkills;
