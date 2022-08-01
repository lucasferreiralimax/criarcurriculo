import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelpView from "../../../views/HelpView.vue";

describe("HelpView", () => {
  const wrapper = mount(HelpView, { shallow: true });
  it("renders basic HelpView", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
