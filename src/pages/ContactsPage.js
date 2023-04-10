import React, { useState } from "react";

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  ChangeInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  addPage = () => {
    console.log(this.state.value);
    this.clearPage();
  };

  clearPage = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.ChangeInput}
          value={this.state.value}
        />
        <button onClick={this.addPage}>add</button>
        <button onClick={this.clearPage}>clear</button>
      </>
    );
  }
}

export default ContactsPage;
