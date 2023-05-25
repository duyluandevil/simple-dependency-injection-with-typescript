import { container } from "./inversify.config";
import { IManage } from "./manage";
import { Token } from "./token";
import { user1Info, user2Info } from "./user";

//create manage
const manage = container.get<IManage>(Token.Manage);

//create user
manage.createUser(user1Info);
manage.createUser(user2Info);

//exec manage function
const userFound = manage.findUser(user2Info.id);
manage.showInfo(userFound);