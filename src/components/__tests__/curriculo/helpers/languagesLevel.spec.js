import { describe, it, expect } from "vitest";
import languagesLevel from "../../../curriculo/helpers/languagesLevel";

describe("Preview", () => {
  const level = languagesLevel;
  it("renders basic languagesLevel", () => {
    expect(level).toEqual({ '0': 'Básico', '1': 'Intermediário', '2': 'Fluente' });
  });
});
