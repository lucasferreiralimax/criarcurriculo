import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import HashCurriculo from "../HashCurriculo.vue";

describe("HashCurriculo", () => {
  const wrapper = mount(HashCurriculo, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic HashCurriculo", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
