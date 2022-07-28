import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Box from "../Box.vue";

describe("Box", () => {
  const wrapper = mount(Box, { shallow: true });
  it("renders basic Box", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
