import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Experience from "../../curriculo/Experience.vue";

describe("Experience", () => {
  const wrapper = mount(Experience, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Experience", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
