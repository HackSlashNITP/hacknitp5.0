import React from "react";
import OrganizerCard from "./organizerCard";
import organizersList from "./organizersData";

const Organizers = () => {
  return (
    <div className="grid grid-cols-8 md:grid-cols-3 lg:grid-cols-6 sm:grid-col-2">
      {organizersList.map((organizer) => {
        return (
          <OrganizerCard
            key={organizer.id}
            imgUrl={organizer.imgUrl}
            name={organizer.name}
            role={organizer.role}
            linkedin={organizer.linkedin}
            github={organizer.github}
          />
        );
      })}
    </div>
  );
};

export default Organizers;
