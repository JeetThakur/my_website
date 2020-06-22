import React from "react";
import Typing from "react-typing-animation";
import { Text, CodeBox } from "./styled";

const FirstPageCodeSpitter = (props) => {
  return (
    <CodeBox>
      <div
        style={{
          color: "#ffffff",
          fontSize: 20,
          paddingLeft: 20,
          //   textAlign: "center",
        }}
      >
        Code Editor:
      </div>
      <div
        style={{
          height: 2,
          border: "2px solid #ffffff",
        }}
      ></div>
      <Typing speed={0}>
        <Text
          style={{
            paddingTop: "5%",
          }}
        >
          &lt; html &gt;
        </Text>
        <Text
          style={{
            marginLeft: "30px",
          }}
        >
          &lt; head &gt;
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          / &gt;
        </Text>

        <Text
          style={{
            marginLeft: "30px",
          }}
        >
          &lt; / head &gt;
        </Text>

        <Text
          style={{
            marginLeft: "30px",
          }}
        >
          &lt; body &gt;
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; div style="text-align: center" &gt;
        </Text>

        <Text
          style={{
            marginLeft: "60px",
          }}
        >
          &lt; h2 &gt; Hey, I'm Jeet ! &lt; / h2 &gt;
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; / div &gt;
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; br &gt;
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; br &gt;
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; div style="text-align: center" &gt;
        </Text>

        <Text
          style={{
            marginLeft: "60px",
          }}
        >
          Welcome aboard
        </Text>

        <Text
          style={{
            marginLeft: "45px",
          }}
        >
          &lt; / div &gt;
        </Text>

        <Text
          style={{
            marginLeft: "30px",
          }}
        >
          &lt; / body &gt;
        </Text>

        <Text>&lt; / html &gt;</Text>
      </Typing>
    </CodeBox>
  );
};

export default FirstPageCodeSpitter;
