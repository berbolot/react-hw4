import React from "react";

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: [],
    };
  }

  getUsers = () => {
    this.setState({
      works: ["Work1", "Work2"],
    });
  };

  render() {
    return (
      <>
        <ul>
          <li>{this.state.works[0]}</li>
          <li>{this.state.works[1]}</li>
        </ul>
        <button onClick={this.getUsers}>add user</button>
      </>
    );
  }
}

export default PortfolioPage;
