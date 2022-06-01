import { AuthenticationStrategy } from '@loopback/authentication';
import { HttpErrors, Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import fetch from 'node-fetch';

export class watchmenStrategy implements AuthenticationStrategy {
    name: string = 'Watchmen';

    constructor(
    ) {

    }

    async authenticate(request: Request): Promise<UserProfile> {
        let _token = parseBearerToken(request);
        let _validator = null;
        let _userProfile: UserProfile = Object.assign({
            validate: false
        });

        if (_token) {

            let rol_admin = 5;
            let urlCreateToken = "http://localhost:5000/validateToken?token=" + _token + "&rolId=" + rol_admin;

            const response = await fetch(urlCreateToken);
            _validator = await response.text();

            if (_validator.toLowerCase() === 'true') {
                _userProfile = Object.assign({
                    validate: true
                });
            }
            else {
                throw new HttpErrors[401]("REQUEST_ERROR: Token no Valido")
            }

        }
        else {
            throw new HttpErrors[401]("REQUEST_ERROR: request no tiene token")
        }

        return _userProfile;
    }

}