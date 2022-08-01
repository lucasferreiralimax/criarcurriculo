import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HashView from "../../../views/HashView.vue";

describe("HashView", () => {
  const wrapper = mount(HashView, { shallow: true });
  it("renders basic HashView", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
