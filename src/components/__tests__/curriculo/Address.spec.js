import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Address from "../../curriculo/Address.vue";

describe("Address", () => {
  const wrapper = mount(Address, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Address", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
