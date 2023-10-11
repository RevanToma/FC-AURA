import logo from "../../assets/images/FCAURA-Logo.png";
import StockholmUnitedLogo from "../../assets/images/stockholmunited.jpg";
import AutobahnLogo from "../../assets/images/AutobahnFC.jpg";
import IFKMATADORERNA from "../../assets/images/IFKMATADORERNA.jpg";
import ProClubsUnited from "../../assets/images/ProClubsUnited.jpg";
import SkummisFC from "../../assets/images/SkummisFC.jpg";
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
    date: "10/01",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United FC",
      logo: StockholmUnitedLogo,
    },
    result: "1-4",
  },
  {
    id: 2,
    date: "09/24",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Autobahn FC",
      logo: AutobahnLogo,
    },
    result: "4-5",
  },
  {
    id: 3,
    date: "09/17",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Pro Clubs United",
      logo: ProClubsUnited,
    },
    result: "3-2",
  },
  {
    id: 4,
    date: "09/10",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Skummis FC",
      logo: SkummisFC,
    },
    result: "2-1",
  },
  {
    id: 5,
    date: "08/27",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United",
      logo: StockholmUnitedLogo,
    },
    result: "3-1",
  },
  {
    id: 6,
    date: "08/20",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Autobahn FC",
      logo: AutobahnLogo,
    },
    result: "1-5",
  },
  {
    id: 7,
    date: "08/13",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Pro Clubs United",
      logo: ProClubsUnited,
    },
    result: "0-2",
  },
  {
    id: 8,
    date: "06/18",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United",
      logo: IFKMATADORERNA,
    },
    result: "0-1",
  },
  {
    id: 9,
    date: "06/11",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Skummis FC",
      logo: SkummisFC,
    },
    result: "1-3",
  },
  {
    id: 10,
    date: "06/04",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Stockholm United FC",
      logo: StockholmUnitedLogo,
    },
    result: "1-2",
  },
  {
    id: 11,
    date: "05/28",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Autobahn FC",
      logo: AutobahnLogo,
    },
    result: "1-3",
  },
  {
    id: 12,
    date: "05/21",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Pro Clubs United",
      logo: ProClubsUnited,
    },
    result: "5-0",
  },
  {
    id: 13,
    date: "05/14",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "IFK MATADORERNA",
      logo: IFKMATADORERNA,
    },
    result: "1-1",
  },
  {
    id: 14,
    date: "05/14",
    homeTeam: {
      name: "FC Aura",
      logo: logo,
    },
    awayTeam: {
      name: "Skummis FC",
      logo: SkummisFC,
    },
    result: "1-2",
  },
];
