import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Languages from "../../curriculo/Languages.vue";

describe("Languages", () => {
  const wrapper = mount(Languages, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Languages", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
