import logo from "../../assets/images/FCAURA-Logo.png";
export interface MatchResults {
  id: number;
  date: string;
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  result: string;
}
export const LatestMatchesData: MatchResults[] = [
  {
    id: 1,
    date: "24/2",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "FC-Skummis",
      logo: logo,
    },
    result: "2-1",
  },
  {
    id: 2,
    date: "24/2",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United",
      logo: logo,
    },
    result: "2-1",
  },
  {
    id: 3,
    date: "24/2",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United",
      logo: logo,
    },
    result: "2-1",
  },
  {
    id: 4,
    date: "24/2",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United",
      logo: logo,
    },
    result: "2-1",
  },
];
