import Button from "./Button";
import createTestContext from "react-cosmos-test/enzyme";
import fixture from "./__fixtures__/RedButton.fixture";

const { mount, getWrapper } = createTestContext({
  fixture,
  cosmosConfigPath: "./cosmos.config.js"
});

beforeEach(mount);

it("runs an obvious test", () => {
  expect(true).toBe(true);
});
