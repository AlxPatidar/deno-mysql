import * as UserModel from '../models/user.ts'

/**
  * @description Get all users
  * @route GET /users
  */
export const getUsers = async ({ request, response }: { request: any; response: any }) => {
    const users = await UserModel.users()
    response.status = 200;
    response.body = {
        message: 'Fetch users list.',
        data: users.rows
    }
}
/**
   * @description Get user by id
   * @route POST /user/:userId
   */
export const getUser = async ({ params, response }: { params: any; response: any }) => {
    const user = await UserModel.user(params.userId)
    response.status = 200;
    response.body = {
        message: 'User detail fetch successfully.',
        data: user.rows
    }
}
/**
   * @description Create user
   * @route GET users
   */
export const createUser = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body();
    const userInfo: UserModel.User = await body.value;
    const user = await UserModel.createUser(userInfo)
    response.status = 200;
    response.body = user
    response.message = 'User created successfully.'
}
/**
   * @description Update user by id
   * @route PUT user/:userId
   */
export const updateUser = async ({ request, response, params }: { request: any; response: any, params: any }) => {
    const body = await request.body()
    const userInfo: any = body.value
    const user = await UserModel.user(params.userId)
    if (user) {
        await UserModel.updateUser(userInfo)
        response.status = 200;
        response.body = user
        response.message = 'User detail updated successfully.'
    } else {
        response.status = 400;
        response.body = { "error": "User not found!" }
    }
}
/**
   * @description Delete user by userId
   * @route DELETE user/:userId
   */
export const deleteUser = async ({ request, response, params }: { request: any; response: any, params: any }) => {
    console.log(params)
    const user = await UserModel.user(parseInt(params.userId))
    if (user) {
        await UserModel.removeUser(parseInt(params.userId))
        response.status = 200;
        response.body = user
        response.message = 'User removed successfully.'
    } else {
        response.status = 400;
        response.body = { "error": "User not found!" }
    }
}