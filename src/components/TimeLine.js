import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const buildTimeLineElement = (author, source, text, price, date) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "black", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      date={date}
      iconStyle={{ background: "black", color: "#fff" }}
    >
      <div className="row">
        <div className="col">$0.44</div>
        <div className="col">30. Jan 2020</div>
        <div className="col">
          <strong>daWilley</strong>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <i>"peercoin is ded"</i>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">Source </div>
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
    </VerticalTimeline>
  );
}
