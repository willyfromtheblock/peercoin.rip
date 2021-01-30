import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="container-fluid">
      <div className="row ppc-hero">
        <div className="col-12 d-flex flex-column ppc-background justify-content-center align-items-center">
          <div className="container-fluid">
            <div className="row justify-content-center ">
              <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <img
                  className="img-fluid ppc-logo"
                  src="assets/img/peercoin.svg"
                  alt="peercoin logo"
                />
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <span>
                <img
                  className="ppc-tombstone"
                  src="assets/img/tombstone.png"
                  alt="tombstone"
                ></img>
              </span>
            </div>
          </div>
          <hr />
          <div className="row mt-4">
            <div className="col">
              <h3>
                <strong>Declared dead</strong>
              </h3>
            </div>
          </div>
          <div className="row">
            <h2>5 times</h2>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h3>
                <strong>Undead since</strong>{" "}
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>7th of July 2012</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">how to contribute goes here</div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <TimeLine />
        </div>
      </div>
      <div className="row ppc-background justify-content-center p-2">
        The End - Icons: icons8.de
      </div>
    </div>
  );
}

export default App;

//TODO: Scroll down hint icon
//TODO: donations
//TODO: contribute
