import { Container } from "inversify";
import { Token } from "./token";
import { IUser, User } from "./user/user";
import { IManage, Manage } from "./manage";

var container = new Container();
container.bind<IUser>(Token.User).to(User).inTransientScope();
container.bind<IManage>(Token.Manage).to(Manage).inSingletonScope();

export { container };