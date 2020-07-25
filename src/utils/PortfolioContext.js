import React from "react";

const PortfolioContext = React.createContext({
  id: 0,
  name: "",
  image: "",
  demo: "",
  repo: "",
  tech: []
});

export default PortfolioContext;
