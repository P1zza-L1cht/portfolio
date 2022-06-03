import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Error.scss';

export default function Error() {

  const navi = useNavigate();

  return(
    <div className="error">
      <div className="error-container">
        <p>PAGE IS NOT FOUND</p>
        <div className="top-btn" onClick={() => {navi('/')}}>Go to TOP</div>
      </div>
    </div>
  );
}