import React from "react";

function Links(props) {
    return (
      <div>
        <h3>Links</h3>
        <ul>
          <ul>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              {props.github}
            </a>
          </ul>
          <ul>
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
              {props.linkedin}
            </a>
          </ul>
        </ul>
      </div>
    );
  }

  export default Links;