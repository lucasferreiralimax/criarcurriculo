import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Navigation from "../Navigation.vue";

describe("Navigation", () => {
  it("renders properly", () => {
    const wrapper = mount(Navigation);
    // expect(wrapper.text()).toContain('Hello Vitest')
  });
});
