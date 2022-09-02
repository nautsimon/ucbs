import React from "react"; //imports react
import data from "./events.json";
import clock from "../imgs/clock.png";
import location from "../imgs/location.png";
import FadeIn from "react-fade-in";
import { NavLink } from "react-router-dom";

const events = data;
class Team extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Events</p>
          <p>
            View previous events {" "}
            <NavLink
              exact={true}
              className="eventLink hover"
              activeClassName="linkActive"
              to="/previous-events"
            >
            here
            </NavLink>.
          </p>
          <p id="eventsoon" className="centerRow">
            More events coming soon.
          </p>
          <br />
          <br />
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="eventsDiv">
              {events.map((event) => (
                <div className="eventDiv row">
                  <div className="eventDateDiv">
                    <p className="eventDateText">[{event.dateFormatted}]</p>
                    <div className="verticalLine" />
                  </div>
                  <div className="eventInfoDiv">
                    <div className="eventInfoInDiv">
                      <div className="eventInfoInInDiv">
                        <div className="iconDiv">
                          <img src={clock} className="icon" alt="clock" />
                          <p className="eventText textPaddingLeft">
                            {event.timeFormatted}
                          </p>
                        </div>
                        <p className="eventTitle">{event.name}</p>

                        <p className="eventText">{event.description}</p>

                        {event.extraDescription.length > 0 ? (
                          <i className="eventText">{event.extraDescription}</i>
                        ) : null}
                        <hr className="line" />

                        <div className="row spaceBetween">
                          <div className="iconDiv">
                            <img src={location} className="icon" alt="clock" />
                            <p className="eventText textPaddingLeft">
                              {event.location}
                            </p>
                          </div>
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="socialLink"
                          >
                            <button className="registerButton">Register</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default Team;
