import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "./include/jquery";
import "datatables.net-dt/css/jquery.dataTables.css";

configure({ adapter: new Adapter() });
