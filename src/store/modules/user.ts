import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { LOGIN_API } from "../../api/user";
import { UserModel, UserLogin } from "@/models/User";
import axios from "axios";

@Module({ namespaced: true })
export default class User extends VuexModule {
  user: UserModel | null = null;

  @Mutation
  SET_USER(user: UserModel): void {
    this.user = user;
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  }

  @Action
  LOGIN(user: UserLogin): object {
    return LOGIN_API(user).then(resp => {
      this.context.commit("SET_USER", resp.data.data);
      return resp;
    });
  }

  @Action
  async LOGOUT(): Promise<void> {
    localStorage.removeItem("matamantra");
    delete axios.defaults.headers.common.Authorization;
    window.location.reload();
  }

  get token(): string | undefined {
    return this.user !== null ? this.user.token : "";
  }

  get userDetail(): object | null {
    return this.user;
  }

  get loginStatus(): boolean {
    return typeof this.user !== null;
  }
}
