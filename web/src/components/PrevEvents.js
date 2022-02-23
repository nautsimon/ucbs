import React from "react"; //imports react
import data from "./prevEvents.json";
import FadeIn from "react-fade-in";

class PrevEvents extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Previous Events</p>
          <br />
          <br />
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="rowwrap">
              {data.map((data) => (
                <div className="eventImgDiv">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=t7cfqfjf4GY"
                  >
                    <img
                      src={
                        require("../imgs/eventImgs/" + data.imagePath).default
                      }
                      className="eventImg"
                      alt={data.name}
                    />
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default PrevEvents;
