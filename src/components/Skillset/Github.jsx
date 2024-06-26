import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Mỗi Ngày Làm Việc Với <strong className="yellow">Github</strong>
      </h1>
      <GitHubCalendar
        username="hvtienprotv84"
        blockSize={15}
        blockMargin={5}
        // color="#6102ce"
        color="#35ff00"
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
