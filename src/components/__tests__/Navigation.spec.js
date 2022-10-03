import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Navigation from "../Navigation.vue";

describe("Navigation", () => {
  const wrapper = mount(Navigation, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });
  it("renders basic Navigation", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
