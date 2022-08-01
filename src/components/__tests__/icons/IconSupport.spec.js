import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconSupport from "../../icons/IconSupport.vue";

describe("IconSupport", () => {
  const wrapper = mount(IconSupport, { shallow: true });
  it("renders basic IconSupport", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
