import { inject, injectable } from 'inversify';
import { Token } from '../token';
import { IUser, User, UserType } from '../user/user';

export interface IManage {
        createUser(userInput: UserType): User;
        findUser(id: number): User;
}

@injectable()
export class Manage implements IManage {

        private _listUsers: Array<User> = [];

        constructor(
                @inject(Token.User) private readonly _user: IUser
        ) { }

        isExistUser(id: number): boolean {
                let isExist = false;
                const user = this._listUsers.find(user => user.id === id);

                isExist = user === undefined ? false : true;

                return isExist
        }

        createUser(userInput: UserType): User {
                const {
                        id,
                        name,
                        position
                } = userInput;

                const isExist = this.isExistUser(id);
                if (isExist) return;

                const user = this._user.create(
                        id,
                        name,
                        position
                )
                this._listUsers.push(user);

                console.log({
                        length: this._listUsers.length
                })

                return user;
        }

        findUser(id: number): User {
                const isExist = this.isExistUser(id);
                if (isExist) return;

                const user = this._listUsers.find(user => user.id === id);
                return user;
        }

}