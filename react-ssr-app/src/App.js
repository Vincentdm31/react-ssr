import "./App.css";
import { useEffect, useState } from "react";

const getCats = () => {
  return fetch("http://localhost:3000/cats")
    .then((res) => res.json())
    .then((payload) => {
      console.log(payload);
      return payload.cats;
    });
};

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then((cats) => {
      console.log("res", cats);
      setCats(cats);
    });
  }, []);
  return (
    <div className="App">
      <h1>Awesome cats</h1>
      <div className="grix xs1 sm3 md5 gutter-xs3 mx-5">
        {cats.length > 0 &&
          cats.map((cat, i) => (
            <div class="card rounded-2 shadow-2" key={"cat-"[i]}>
              <div className="card-header airforce dark-4">{cat.name}</div>
              <div className="card-image">
                <img className="responsive-media" src={cat.img} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
