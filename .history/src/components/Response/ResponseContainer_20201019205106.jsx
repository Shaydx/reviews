import React from "react";

import Response from './Response';

const ResponseContainer = (props) => {
  return (
    <div id="responseContainer">
      <Response {...props} />
    </div>
  );
};

export default ResponseContainer;
