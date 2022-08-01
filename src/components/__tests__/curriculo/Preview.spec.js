import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Preview from "../../../components/curriculo/Preview.vue";

describe("Preview", () => {
  const wrapper = mount(Preview, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Preview", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
