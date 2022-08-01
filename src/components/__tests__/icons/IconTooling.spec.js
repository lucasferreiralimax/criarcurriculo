import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconTooling from "../../icons/IconTooling.vue";

describe("IconTooling", () => {
  const wrapper = mount(IconTooling, { shallow: true });
  it("renders basic IconTooling", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
