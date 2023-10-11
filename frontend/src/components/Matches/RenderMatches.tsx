import { MatchResults } from "./LatestMatchesData";
import { LatestMatchesSection, RenderMatchDiv } from "./LatestMatchesStyles";

const RenderMatches = (matches: MatchResults[]) => {
  return matches.map((match, index) => (
    <LatestMatchesSection key={match.id}>
      <RenderMatchDiv index={index}>
        <span className="match-date"> {match.date}</span>
        <span>{match.awayTeam.name}</span>
        <img src={match.awayTeam.logo} alt="Away team logo" />
        <p>{match.result}</p>
        <img src={match.homeTeam.logo} alt="Home team logo" />
        <span>{match.homeTeam.name}</span>
      </RenderMatchDiv>
    </LatestMatchesSection>
  ));
};

export default RenderMatches;
