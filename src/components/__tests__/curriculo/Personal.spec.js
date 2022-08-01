import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Personal from "../../curriculo/Personal.vue";

describe("Personal", () => {
  const wrapper = mount(Personal, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Personal", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
