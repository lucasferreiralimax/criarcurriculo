import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconUser from "../../icons/IconUser.vue";

describe("IconUser", () => {
  const wrapper = mount(IconUser, { shallow: true });
  it("renders basic IconUser", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
