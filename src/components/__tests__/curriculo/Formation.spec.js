import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Formation from "../../curriculo/Formation.vue";

describe("Formation", () => {
  const wrapper = mount(Formation, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Formation", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
