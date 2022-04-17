import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Logo from "../Logo.vue";

const wrapper = mount(Logo);

describe("Logo", () => {
  it("is Logo a vue instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
