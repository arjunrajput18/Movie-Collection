import "./styles.css";
import { useState } from "react";

const movieDB = {
  Hollywood: [
    { Name: "The Shawshank Redemption (1994)", rating: "9.2/10" },
    { Name: "The Godfather (1972)", rating: "9.1/10" },
    { Name: "The Dark Knight (2008)", rating: "9.0/10" },
    { Name: "Forrest Jump (1994)", rating: "8.8/10" },
    { Name: "Inception (2010)", rating: "8.7/10" },
    { Name: "Memento (2000)", rating: "8.3/10" }
  ],
  Bollywood: [
    { Name: "Dangal (2016)", rating: "9.2/10" },
    { Name: "Ek tha Tiger (2012)", rating: "9.1/10" },
    { Name: "welcome (2007)", rating: "8.8/10" },
    { Name: "golmaal (2006)", rating: "8.6/10" },
    { Name: "Sanju (2019)", rating: "8.4/10" },
    { Name: "Bajrangi Bhaijaan (2018)", rating: "8.3/10" }
  ],
  Tollywood: [
    { Name: "Kantara (2022)", rating: "9.4/10" },
    { Name: "Baahubali: The Beginning (2016)", rating: "9.2/10" },
    { Name: "Ala Vaikunthapurramuloo (2018)", rating: "9.0/10" },
    { Name: "Pushpa: The Rise (2021)", rating: "8.8/10" },
    { Name: "Sarrainodu (2009)", rating: "8.5/10" },
    { Name: "KGF (2019)", rating: "8.3/10" },
    { Name: "DJ (2018)", rating: "8.1/10" }
  ]
};
var listMovie = Object.keys(movieDB);

export default function App() {
  const [listClicked, setListClicked] = useState("Hollywood");
  function clickHandler(value) {
    setListClicked(value);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Good Movie Collection🎥🍿</h2>
        <p>
          Checkout my favorite Movie Collection. Select a film industries to get
          started
        </p>

        <div>
          {listMovie.map((value, index) => (
            <button
              key={index}
              onClick={() => clickHandler(value)}
              className="button-list"
            >
              {value}
            </button>
          ))}
        </div>
        <hr />
        <div>
          <ul>
            {movieDB[listClicked].map((value, index) => (
              <li key={index} className="list-content">
                <div> {value.Name} </div>

                <div style={{ margin: "0.3rem", fontSize: "15px" }}>
                  {" "}
                  IMDB rating: {value.rating}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
