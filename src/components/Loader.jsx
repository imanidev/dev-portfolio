import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";


const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="loading-container">
      {isLoading && <SyncLoader color="#000000" size={10} />}
    </div>
  );
};

export default Loader;
