import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  ChangeText = () => {
    if (this.state.title == "Hello world") {
      this.setState({
        title: "",
      });
    } else {
      this.setState({
        title: "Hello world",
      });
    }
  };

  render() {
    return (
      <>
        <p>{this.state.title}</p>
        <button onClick={this.ChangeText}>Кпопку</button>
      </>
    );
  }
}

export default AboutUs;
