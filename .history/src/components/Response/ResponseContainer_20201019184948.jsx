import React from "react";

import Response from './Response';

const ResponseContainer = (props) => {
  return (
    <div id="responseContainer">
      <Response {...props} />
      <Response {...props} />
      <Response {...props} />
      <Response {...props} />
      <Response {...props} />
    </div>
  );
};

export default ResponseContainer;
