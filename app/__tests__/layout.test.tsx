import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RootLayout from "../layout";

describe("RootLayout", () => {
  it("renders children inside the html/body without throwing", () => {
    // RootLayout renders <html><body>{children}</body></html>.
    // jsdom permite renderizar <html> dentro de un container, pero React
    // emite warnings; usamos container.innerHTML para verificar el child
    // sin asertar la estructura del documento completo.
    const { container } = render(
      <RootLayout>
        <div data-testid="kid">child</div>
      </RootLayout>,
    );
    expect(container.innerHTML).toContain('data-testid="kid"');
    expect(container.innerHTML).toContain("child");
  });
});
