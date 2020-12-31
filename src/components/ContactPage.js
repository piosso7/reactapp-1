import React from "react";
import "./ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div className="contact">
        <form>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button onClick={this.handleSubmit}>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value}
          message={
            "Masz niewypełniony formularz. Czy na pewno chcesz opuścić stronę?"
          }
        />
      </div>
    );
  }
}
export default ContactPage;
