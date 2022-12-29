import React from "react";

const ListItem = ({msg}) => {
  return (
    <li>
      <h3 className="m-2 md:mx-[5px] sm:mx-[5px] font-normal font-inherit">
        {msg}
      </h3>
    </li>
  );
};

export default ListItem;
