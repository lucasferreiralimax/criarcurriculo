import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { mount } from "@vue/test-utils";
import Curriculo from "../Curriculo.vue";

describe("Curriculo", () => {
  const wrapper = mount(Curriculo, {
    shallow: true,
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  });

  it("renders basic Curriculo", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
