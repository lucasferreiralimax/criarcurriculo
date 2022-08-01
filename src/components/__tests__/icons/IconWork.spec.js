import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconWork from "../../icons/IconWork.vue";

describe("IconWork", () => {
  const wrapper = mount(IconWork, { shallow: true });
  it("renders basic IconWork", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
