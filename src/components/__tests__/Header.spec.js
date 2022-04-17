import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Header from "../Header.vue";

describe("Header", () => {
  const wrapper = mount(Header, { shallow: true });
  it("renders basic Header", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
