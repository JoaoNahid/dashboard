import React from "react";

function SearcBar(props) {
  return (
    <>
      <div className="searchArea">
        <input type="text" placeholder={props.placeholder} />
        <div
          className="searchButton"
          onClick={(e) => console.log('Searching...')}
        >
          <img src="./img/magnifying-glass.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default SearcBar;
