import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LoginView from "../../../views/LoginView.vue";

describe("LoginView", () => {
  const wrapper = mount(LoginView, { shallow: true });
  it("renders basic LoginView", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
