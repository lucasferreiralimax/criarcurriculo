import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconEcosystem from "../../icons/IconEcosystem.vue";

describe("IconEcosystem", () => {
  const wrapper = mount(IconEcosystem, { shallow: true });
  it("renders basic IconEcosystem", () => {
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper);
  });
});
