import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { List } from "../components/List";

// userEvent => disparar ações dentro da aplicação

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText, rerender } = render(
      <List inititalItems={["Diego", "Rodz", "Mayk"]} />
    );

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Rodz")).toBeInTheDocument();
    expect(getByText("Mayk")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <List inititalItems={[]} />
    );

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("Novo")).toBeInTheDocument();
    });
  });

  it("should be able to remove item to the list", async () => {
    const { getAllByText } = render(
      <List inititalItems={["Diego", "Rodz", "Mayk"]} />
    );

    const removeButtons = getAllByText("Remover");

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getAllByText("Diego");
    });
  });
});