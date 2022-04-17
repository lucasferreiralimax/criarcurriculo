import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Navigation from "../Navigation.vue";

describe("Navigation", () => {
  const wrapper = mount(Navigation, { shallow: true });
  it("renders basic Navigation", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
