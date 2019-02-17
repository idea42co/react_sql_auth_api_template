const Config = () => {
    const { environment } = require(`./env/${process.env.NODE_ENV || 'development'}`)

    return {
        api: {
            baseUrl: environment.api.baseUrl
        },
        authentication: {
            publicKey: environment.authentication.publicKey
        },
        loginRoute: environment.loginRoute
    }
}

export default Config();