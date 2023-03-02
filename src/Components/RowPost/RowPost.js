import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../Axios";
import { apiKey, imageUrl } from "../Constants/Constants";
import YouTube from "react-youtube";

const RowPost = (props) => {
  const [poster, setPoster] = useState([]);
  const [urlid, seturlid] = useState(null);
  
 
  useEffect(() => {
    axios
      .get(props.Url)
      .then((response) => {
        // console.log(response.data.results);
        setPoster(response.data.results);
      })
      .catch((error) => {
        alert("network error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        if (res.data.results.length !== 0) {
          seturlid(res.data.results[0]);
          //  console.log(res.data.results[0]);
           console.log(urlid.key);
        } else {
          console.log('no id found');
          alert('no data')
        }
       
      });
    console.log(id);
  };
  
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <div className="card-container">
        {poster.map((data) => (
          <div key={data.id}>
            <div className={props.isSmall ? "smallPoster" : "image-box"}>
              <img
                onClick={() => handleMovie(data.id)}
                src={`${imageUrl + data.backdrop_path}`}
                alt="poster"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="youtube-container">
        {urlid ?<YouTube videoId={urlid.key} opts={opts} /> :''}
      </div>
    </div>
  );
};

export default RowPost;
