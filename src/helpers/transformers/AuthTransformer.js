/***
 * Auth Transformer
 * Transform Data From Api to State
 */


class AuthTransformer {

    static transformAuthData( authResponse ) {
        return {
            id: authResponse.user.id,
            fullName: authResponse.user.full_name,
            authResponseName: authResponse.user.username,
            email: authResponse.user.email,
            apiToken: authResponse.user.api_token,
            appAdmin: authResponse.user.app_admin,
            encodedToken: authResponse.tenants[ 0 ].encoded_token,
            encodedApiHeaderToken: 'Basic ' + authResponse.tenants[ 0 ].encoded_token,
            encodedApiHeader: { "Authorization": 'Basic ' + authResponse.tenants[ 0 ].encoded_token }
        };
    }

    static transformTenantsAuthData(authResponse){
        return {
            authTenant:authResponse.tenants[0],
            authTenants: authResponse.tenants
        };
    }
}

export default AuthTransformer;