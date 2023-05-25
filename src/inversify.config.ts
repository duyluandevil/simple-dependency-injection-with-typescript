import { Container } from "inversify";
import { Token } from "./token";
import { IUser, User } from "./user/user";
import { IManage, Manage } from "./manage";

var container = new Container();
container.bind<IUser>(Token.User).to(User).inTransientScope(); // user just reset when has request to enforcements with it, so lifecycle is transient, does not need request
container.bind<IManage>(Token.Manage).to(Manage).inSingletonScope(); // manage object is for managing all project so lifecycle of manage object just single tone

export { container };