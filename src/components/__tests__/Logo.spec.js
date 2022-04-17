import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Logo from "../Logo.vue";

describe("Logo", () => {
  const wrapper = mount(Logo, { shallow: true });
  it("renders basic Logo", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
