import FrameWork from "../awesome-framework";

export default function Header() {
  const { Component } = FrameWork();
  const options = {
    template: `<div>Hello ${props.property1}</div>`,
    props: { property1: "Universe" },
    node: document.querySelector(".greetings"),
    key: "title",
  };
  Component(options);
}
