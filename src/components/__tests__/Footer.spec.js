import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Footer from "../Footer.vue";

describe("Footer", () => {
  const wrapper = mount(Footer, { shallow: true });
  it("renders basic Footer", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
