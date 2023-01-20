import { IUser } from "../user";

export interface IAuth {
  auth?: boolean;
  token?: string;
  user?: IUser;
}
