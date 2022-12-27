import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SponsorGrid from "../components/prev_sponsors/sponsorGrid";

import titleSponsor from "../components/prev_sponsors/titleSponsor";
import associateSponsor from "../components/prev_sponsors/associateSponsor";
import subeventSponsor from "../components/prev_sponsors/subeventSponsor";
import certificationsSponsor from "../components/prev_sponsors/certificationsSponsor";

const PrevSponsors = () => {
  return (
    <div className="bg-black w-full text-white font-space-grotesk">
      <Header />
      <div className="w-full main-content flex flex-col items-center">
        <h2 className="text-6xl font-semibold my-10 md:text-4xl md:y-3">Sponsors</h2>
        <main className="sponsors w-full flex flex-col justify-between items-center">
          <SponsorGrid sponsors={titleSponsor} title='Title Sponsor'/>
          <SponsorGrid sponsors={associateSponsor} title='Associate Sponsor'/>
          <SponsorGrid sponsors={subeventSponsor} title='Subevent Sponsor'/>
          <SponsorGrid sponsors={certificationsSponsor} title='Certificate Sponsor'/>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PrevSponsors;