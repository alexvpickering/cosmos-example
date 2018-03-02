import Table from "./Table";
import createTestContext from "react-cosmos-test/enzyme";
import fixture from "./__fixtures__/FilledTable.fixture";

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

it("can retrieve the table", () => {
  expect(getWrapper("table").length).toBe(1);
});

it("can retrieve an added table row", () => {
  expect(getWrapper(".odd").length).toBe(1);
});
