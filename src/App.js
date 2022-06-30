import "./App.scss";
import React from "react";
import { Logo, Slider } from "./components";
import PageContextProvider from "./pageContextProvider";

function App() {
  const limit = 6;
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    console.log("fetching");
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        console.log("currentData", data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContextProvider>
      <div className="container">
        <h1 className="title">Lorem Ipsum Modules</h1>
        <Logo props={photos} />
        <Slider props={photos} />
      </div>
    </PageContextProvider>
  );
}

export default App;
