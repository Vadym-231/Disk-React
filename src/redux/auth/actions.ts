const actions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    LOGOUT: 'LOGOUT',

    CHECK_USER_REQUEST: 'CHECK_USER_REQUEST',
    CHECK_USER_SUCCESS: 'CHECK_USER_SUCCESS',

    login: (args: { email: string, password: string})=>({
        type: actions.LOGIN_REQUEST,
        args
    })
}

export default actions
