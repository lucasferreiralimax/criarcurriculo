import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconDonate from "../../../components/icons/IconDonate.vue";

describe("IconDonate", () => {
  const wrapper = mount(IconDonate, { shallow: true });
  it("renders basic IconDonate", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
