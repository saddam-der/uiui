import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("test", () => {
  it("coba", () => {
    const wrapper = shallowMount(HelloWorld);
    const div = wrapper.find("div");
    expect(div.exists()).toBe(true);
  });
});
