import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconHome from "../../icons/IconHome.vue";

describe("IconHome", () => {
  const wrapper = mount(IconHome, { shallow: true });
  it("renders basic IconHome", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
