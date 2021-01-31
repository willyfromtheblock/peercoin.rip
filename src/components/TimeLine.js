import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const buildTimeLineElement = (author, sourceURL, text, price, date) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "black", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      icon={<img src="../assets/img/skull.png" alt="skull" />}
      iconStyle={{
        background: "black",
        color: "#fff",
        display: "flex",
        padding: "10px",
      }}
    >
      <div className="row">
        <div className="col">
          <img src="../assets/img/dollarsign.png" alt="dollar price" />
          0.44
        </div>
        <div className="col">
          <img src="../assets/img/calendar.png" alt="calendar" />
          <span className="ppc-timeline_title">30. Jan 2020</span>
        </div>
        <div className="col">
          <img src="../assets/img/writer.png" alt="author" />
          <span className="ppc-timeline_title">daWilye</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <span className="ppc-timeline_text">&laquo; ppc is ded &raquo;</span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <a
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            className="ppc-timeline_source"
          >
            Source
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default function TimeLine() {
  return (
    <VerticalTimeline>
      {buildTimeLineElement("test", "test", "test", "test", "test")}
      {buildTimeLineElement("test", "test", "test", "test", "test")}
      {buildTimeLineElement("test", "test", "test", "test", "test")}{" "}
      {buildTimeLineElement("test", "test", "test", "test", "test")}{" "}
      {buildTimeLineElement("test", "test", "test", "test", "test")}{" "}
      {buildTimeLineElement("test", "test", "test", "test", "test")}
      <VerticalTimelineElement
        iconStyle={{
          background: "#3cb054",
          color: "#fff",
          display: "flex",
          padding: "13px",
        }}
        icon={<img src="../assets/img/peercoin-leaf.svg" alt="peercoin leaf" />}
      />
    </VerticalTimeline>
  );
}
