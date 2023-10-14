export interface User {
    id?: number;    // The '?' denotes that the property is optional, because ID might not be present before saving a user.
    username: string;
    password: string;
    role: UserRole;
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}
