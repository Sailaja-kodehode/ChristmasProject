import { useEffect, useState } from "react";
import "./greetings.css";
function Greetings() {
  const [formItem, setFormItem] = useState({
    name: "",
    message: "",
  });
  const [otherGreetings, setOtherGreetings] = useState([
    {
      name: "Loukya",
      message: "May your holidays sparkle with joy and laughter.",
      dateSent: "18-12-2022",
    },
    {
      name: "Aditya",
      message:
        "Best wishes for a joyous Christmas filled with love,this holiday season and throughout the coming year!Merry Christmas!",
      dateSent: "20-12-2022",
    },
    {
      name: "Santosh",
      message:
        "Wishing you hope, peace and lots of Christmas cookies this holiday season!",
      dateSent: "12-12-2022",
    },
  ]);
  function inputValue(event) {
    setFormItem((prevItem) => {
      return {
        name: event.target.id === "name" ? event.target.value : prevItem.name,
        message:
          event.target.id === "message" ? event.target.value : prevItem.message,
        dateSent: `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}`,
      };
    });
  }
  function addGreeting(event) {
    event.preventDefault();
    localStorage.setItem("Greeting", JSON.stringify(formItem));
    postGreeting();
  }
  useEffect(() => {
    postGreeting();
  }, []);

  function postGreeting() {
    const post = localStorage.getItem("Greeting");

    console.log(post);
    if (post) {
      setOtherGreetings((prevState) => {
        return [JSON.parse(post), ...prevState];
      });
    }
  }
  // if (localStorage.getItem("Greeting")) console.log("yes");
  return (
    <div className="greetings" id="greeting">
      <form className="form">
        <h1 className="form_title">Greetings</h1>
        <label className="form_label" htmlFor="name">
          Name
        </label>
        <input
          className="form_input form_input-name"
          type="text"
          id="name"
          onChange={inputValue}
        />
        <label className="form_label" htmlFor="message">
          Christmas Wishes
        </label>
        <textarea
          className="form_input"
          id="message"
          onChange={inputValue}
        ></textarea>
        <input
          className="form_submit"
          type="submit"
          onClick={addGreeting}
          value="Send"
          onChange={() => inputValue("message")}
        />
      </form>
      <div className="greetings_list">
        <h1 className="list_title">Christmas Greetings</h1>
        {otherGreetings.map((element, index) => {
          return (
            <div key={index} className="output">
              <h3 className="output_title">{element.name}</h3>
              <p className="output_text">{element.message}</p>
              <p className="output_date">{element.dateSent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Greetings;
