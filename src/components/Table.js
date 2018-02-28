import React from "react";
import "datatables.net-dt/css/jquery.dataTables.css";

class Table extends React.Component {
  componentDidMount() {
    // draw table
    window.$(`#example-table`).DataTable({
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
    window
      .$(`#example-table`)
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
