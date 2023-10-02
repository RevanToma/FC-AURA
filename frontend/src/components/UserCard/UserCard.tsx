import { FC } from "react";

type UserCardProps = {
  user: {
    name: string;
    bio: string;
    weight: number;
    length: number;
    instagram: string;
    position: string;
    skills: string[];
  };
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <h4>{user.name}</h4>
      <h6>{user.position}</h6>
      <p>{user.bio}</p>

      <div>
        <p>Vikt: {user.weight}:Kg</p>
        <p>Längd: {user.length}:cm</p>

        <a
          href={`https://www.instagram.com/${user.instagram}/`}
          rel="noreferrer"
          target="_blank"
        >
          Instagram
        </a>

        <ul>
          {user.skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
