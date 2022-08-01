import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../../../views/HomeView.vue";

describe("HomeView", () => {
  const wrapper = mount(HomeView, { shallow: true });
  it("renders basic HomeView", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
