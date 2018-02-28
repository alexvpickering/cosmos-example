import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "./include/jquery";

configure({ adapter: new Adapter() });
