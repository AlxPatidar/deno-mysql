export const getUsers = ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = 'getUsers'
}
export const getUser = ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = 'getUser'
}
export const createUser = ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = 'addUser'
}
export const updateUser = ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = 'updateUser'
}
export const deleteUser = ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = 'deleteUser'
}