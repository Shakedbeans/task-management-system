import { BaseEntity } from '../../../shared/database/base.entity';
export declare class User extends BaseEntity {
    email: string;
    password: string;
    name: string;
    role: string;
}
