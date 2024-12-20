import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

// This component represent an individual page
const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events?page=1&limit=10")
      .then((response) => {
        setEvents(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(./src/assets/pedestrians-400811_1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center"></div>

        <div className="flex flex-wrap m- p-10">
          {events.map((anEvent) => {
            return (
              <div key={anEvent.id}>
                <div className="card bg-orange-50 px-8 py-3 m-5 w-96">
                  <h2 className="card-title ">{anEvent.title}</h2>
                  <div className="card-body">
                    <p>{anEvent.description}</p>
                  </div>

                  <div className="card-actions justify-end underline">
                    <NavLink to={`/events/${anEvent.id}`}>Details</NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
