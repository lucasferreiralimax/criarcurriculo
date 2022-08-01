import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconCommunity from "../../../components/icons/IconCommunity.vue";

describe("IconCommunity", () => {
  const wrapper = mount(IconCommunity, { shallow: true });
  it("renders basic IconCommunity", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
