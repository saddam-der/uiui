import store from "../store";

export const baseUrl: string =
  process.env.NODE_ENV === "production"
    ? "https://api.matamantra.id"
    : "https://api.matamantra.com";

export const token: string = store.getters["user/token"]
  ? "Bearer " + store.getters["user/token"]
  : "";
