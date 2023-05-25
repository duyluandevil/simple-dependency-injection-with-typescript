import "reflect-metadata";
import { injectable } from "inversify";
import { Token } from "../token";

export type UserType = {
        id: number,
        name: string,
        position: string
}

export interface IUser {
        create(id: number, position: string, name: string): User;
        show(): void;
}

@injectable()
export class User implements IUser {

        public id: number;
        private _position: string;
        private _name: string;

        constructor() { }

        set ids(id: number) {
                this.id = id;
        }

        set name(name: string) {
                this._name = name;
        }

        set position(position: string) {
                this._position = position;
        }

        create(id: number, position: string, name: string): User {
                const user = new User();

                user.ids = id;
                user.name = name;
                user.position = position;

                return user;
        }

        show(){
                console.log({
                        name: this._name,
                        position: this._position
                })
        }

}