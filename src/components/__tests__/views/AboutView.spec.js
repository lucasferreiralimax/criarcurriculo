import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AboutView from "../../../views/AboutView.vue";

describe("AboutView", () => {
  const wrapper = mount(AboutView, { shallow: true });
  it("renders basic AboutView", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
