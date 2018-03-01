import $ from "jquery";
import DataTables from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";

// Attach DataTables plugin to jQuery in CommonJS environment. When loaded in
// the browser it attaches itself automatically.
if (!$.fn.DataTable) {
  DataTables();
}
