import React from "react";
import NavBar from "../NavBar";
import FirstPageCodeSpitter from "../../components/FirstPageCodeSpitter";
import Typing from "react-typing-animation";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />

        <FirstPageCodeSpitter />

        <div
          style={{
            width: 400,
            float: "left",
            height: 390,
            marginTop: 170,
            marginLeft: 50,
            display: "inline-block",
            overflow: "hidden",
            border: "1px solid #ffffff",
            fontFamily: "Piedra",
            color: "#ffffff",
            fontSize: 19,
          }}
        >
          Output
          <div style={{ border: "2px solid #ffffff" }}></div>
          <Typing speed={0}>
            <Typing.Delay ms={25500} />
            <div style={{ textAlign: "center", marginTop: 50 }}>
              <h2>Hey, I'm Jeet!</h2>
            </div>
            <br />
            <div style={{ textAlign: "center" }}> Welcome aboard</div>
          </Typing>
        </div>

        {/* Console */}
        <div
          style={{
            width: 480,
            height: 240,
            marginTop: 320,
            marginLeft: 50,
            display: "inline-block",
            overflow: "hidden",
            border: "1px solid #ffffff",
            fontFamily: "Piedra",
            color: "#ffffff",
            fontSize: 19,
          }}
        >
          Console:
          <div style={{ border: "2px solid #ffffff" }}></div>
          <Typing>
            <Typing.Delay ms={20000} />
            <Typing.Speed ms={0} />
            <div style={{ paddingLeft: 10 }}>&gt; npm start</div>
            <div style={{ paddingLeft: 10 }}>
              &gt; my_website@0.1.0 start
              C:\Users\Desktop\website_jeet_thakur\my_website
            </div>
            <div style={{ paddingLeft: 10 }}>&gt; react-scripts start </div>
          </Typing>
        </div>

        {/* Bottom text piece */}
        <div
          style={{
            marginTop: 100,
            marginLeft: 320,
            fontSize: 25,
            fontFamily: "Piedra",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              float: "left",
              width: 250,
              border: "2px solid #ffffff",
              marginTop: 15,
            }}
          ></div>
          <div style={{ display: "inline-block", marginLeft: 70 }}>
            Thinker | Believer | Innovator
          </div>

          <div
            style={{
              float: "right",
              width: 250,
              border: "2px solid #ffffff",
              marginRight: 280,
              marginTop: 15,
            }}
          />
        </div>
      </>
    );
  }
}

export default Main;
