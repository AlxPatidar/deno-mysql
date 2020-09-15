import { client } from '../config/database.ts'

export interface User {
    id?: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
/**
   * Will return all the entries in the users column
   * @returns array of users
   */
export const users = async () => await client.execute(`SELECT * FROM users`)
/**
   * Takes in the userId params & returns the user item found against it.
   * @param userId
   * @returns object of users item
   */
export const user = async (id: number) => await client.execute(`SELECT * FROM users WHERE id = ?`, [id])
/**
 * Create a new user into users table
 */
export const createUser = async (user: User) => {
    const { name, username, email, phone } = user
    return await client.execute(`INSERT INTO users(name, username, email, phone) values(?, ?, ?, ?)`, [
        name,
        username,
        email,
        phone
    ])
}
/**
   * Updates the content of a single todo item
   * @param userId // integer
   * @param user
   */
export const updateUser = async ({ name, username, phone, id }: { name: string, username: string, phone: string, id: number }) => {
    return await client.execute(`UPDATE users SET name= ?, username= ?, phone= ? WHERE id = ?`, [
        name,
        username,
        phone,
        id
    ]);
}
/**
   * Deletes a user by userId
   * @param userId // integer
   */
export const removeUser = async (id: number) => {
    return await client.execute(`DELETE FROM users WHERE id = ?`, [id]);
}
