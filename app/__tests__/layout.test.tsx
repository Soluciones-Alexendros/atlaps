import { render } from "@testing-library/react";
import { act } from "react";
import { describe, it, expect } from "vitest";
import RootLayout from "../layout";

describe("RootLayout", () => {
  it("renders children inside the html/body without throwing", async () => {
    // RootLayout es un async Server Component; act() asegura que
    // todas las actualizaciones de estado/suspense se resuelven antes
    // de hacer las aserciones.
    let container: HTMLElement;
    await act(async () => {
      ({ container } = render(
        <RootLayout>
          <div data-testid="kid">child</div>
        </RootLayout>,
      ));
    });
    expect(container!.innerHTML).toContain('data-testid="kid"');
    expect(container!.innerHTML).toContain("child");
  });
});
