import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconDocumentation from "../../../components/icons/IconDocumentation.vue";

describe("IconDocumentation", () => {
  const wrapper = mount(IconDocumentation, { shallow: true });
  it("renders basic IconDocumentation", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
