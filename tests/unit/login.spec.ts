import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("check div", () => {
    const wrapper = shallowMount(HelloWorld);
    const div = wrapper.find("div");
    expect(div.exists()).toBe(true);
  });

  it("check empty", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.isEmpty()).toBe(false);
  });
});
