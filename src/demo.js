import React, { Component } from "react";
import Select from "react-select";
export default class SelectDemo extends Component {
  state = { selected: [] };
  onChange = (selected) => {
    this.setState({
      selected: selected,
    });
  };
  option = [
    { value: "sel1", label: "sel1" },
    { value: "abc2", label: "abc2" },
    { value: "sel3", label: "sel3" },
  ];
  render() {
    return (
      <div>
        <Select
        value={this.state.selected}
        onChange={this.onChange}
        options={this.option}
        placeholder={"search"}
        />
      </div>
    );
  }
}
