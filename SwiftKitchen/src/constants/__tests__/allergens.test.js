// we hard code these allergens. its VITALLY IMPORTANT that these match the
// ones returned by the api
import { allergens } from "../allergens.js";
import "isomorphic-fetch";

const allergensEndpoint =
  "https://api-development.swiftkitchen.co.uk/api/allergens";

jest.setTimeout(30000);

test("Test local allergens match remote", async () => {
  const response = await fetch(allergensEndpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();

  expect(allergens).not.toBe(null);
  expect(allergens).toBeDefined();
  expect(allergens).toBeTruthy();

  expect(data).not.toBe(null);
  expect(data).toBeDefined();
  expect(data).toBeTruthy();

  expect(allergens.length).toBe(data.length);

  for (let i = 0; i < allergens.length; i++) {
    let name = allergens[i].name;
    let id = allergens[i].id;

    let found = data.find((item) => item.name === name);
    expect(found).not.toBe(null);
    expect(found).toBeDefined();
    expect(found).toBeTruthy();
    expect(found.id).toBe(id);
  }
});
