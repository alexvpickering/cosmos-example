import $ from "jquery";
import React from "react";

class Table extends React.Component {
  componentDidMount() {
    // draw table
    $(`#example-table`).DataTable({
      dom: "ft",
      data: this.props.data,
      columns: [
        {
          title: "Group",
          data: "group"
        }
      ]
    });
  }

  componentWillUnmount() {
    $(`#example-table`)
      .DataTable()
      .destroy(true);
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    return (
      <div>
        <table id="example-table" width="100%" className="cell-border nowrap" />
      </div>
    );
  }
}

Table.defaultProps = {
  data: []
};

export default Table;
