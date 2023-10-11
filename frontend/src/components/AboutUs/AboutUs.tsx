import { useState } from "react";
import Button from "../common/Button/Button";
import { ButtonType } from "../common/Button/ButtonTypes";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="backgroundInfo">
      <div>
        <header>
          <h1>Om oss</h1>
        </header>
        <p>
          I skymningen av 2022, på en gräsbevuxen plan någonstans i Sverige,
          lades grunden till något storslaget. Med passionen för fotbollen
          pulserande i hjärtat och drömmen om stunder fyllda av gemenskap och
          äkta laganda, föddes FC Aura.
        </p>

        <div className={`content ${showMore ? "open" : ""}`}>
          <p>
            Det var inte bara ett lag som kom till världen, utan en familj. Här,
            där varje passning, varje skott och varje skratt binder oss samman,
            skapar vi vårt eget kapitel i fotbollens historia. Vi är mer än bara
            spelare på en plan. Vi är ett lag, en enhet, en aura av passion.
          </p>
          <p>
            Välkommen till FC Aura – där varje match inte bara handlar om att
            vinna, utan om att forma en saga som vi alla är en del av.
          </p>
        </div>
        <Button
          buttontypes={ButtonType.Skills}
          className="readMore"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Läs mindre..." : "Läs mer..."}
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
