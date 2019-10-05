import React from "react";
import "./dock-item.css";

export default class extends React.Component<props> {
  state = { showTitle: false };

  render() {
    return (
      <div
        className={"item"}
        onMouseMove={() => {
          this.setState({ showTitle: true });
        }}
        onMouseLeave={() => {
          this.setState({ showTitle: false });
        }}
      >
        {this.state.showTitle ? (
          <>
            <div className={"title arrow_box"}>
              <div className={"titleText"}>{this.props.title}</div>
            </div>
          </>
        ) : null}
        <div
          className={"icon"}
          onClick={this.props.onClick}
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.width}px`
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
