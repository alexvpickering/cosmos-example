import React from "react";

class Button extends React.Component {
  componentDidMount() {
    window.$("#jquery-btn").css({
      padding: "30px",
      border: "1px solid #ddd",
      color: "white",
      "border-radius": "20px"
    });
  }

  render() {
    return (
      <div>
        <button id="jquery-btn" style={{ background: this.props.bg }}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
