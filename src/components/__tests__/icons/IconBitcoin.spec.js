import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconBitcoin from "../../../components/icons/IconBitcoin.vue";

describe("IconBitcoin", () => {
  const wrapper = mount(IconBitcoin, { shallow: true });
  it("renders basic IconBitcoin", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
