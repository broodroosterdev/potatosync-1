export enum VerifyStatusCode {
    //The token can not be used, you can request a new token here:
    TOKEN_NOT_FOUND,
    //The token has expired, you can request a new token here:
    TOKEN_EXPIRED,
    //The account has been verified successfully, you can close this tab
    ACCOUNT_VERIFIED,
    //This account is already verified, no need to verify again
    ACCOUNT_ALREADY_VERIFIED,
    //An email has been sent, please check your inbox
    EMAIL_SENT,
    //An unknown error occured, please contact support
    INTERNAL_SERVER_ERROR
}

export enum LoginStatusCode {
    //The username/email or password are invalid, did you mistype something?
    INVALID_CREDENTIALS,
    //There is no user with that email/password, did you mistype something?
    USER_NOT_FOUND,
    //The user is not verified yet, please check your inbox or request a new verify token here:
    USER_NOT_VERIFIED,
    //The user has been logged out, you can close this tab
    LOGGED_OUT,
    //The token used is invalid, please log in again
    INVALID_TOKEN,
    //The session is invalid, please log in again
    INVALID_SESSION
}

export enum ValidationStatusCode {
    //ok (no need to display to user)
    VALID = 0,
    //Too short, please add some more characters
    TOO_SHORT = 1,
    //Too long, please remove some characters
    TOO_LONG = 2,
    //Invalid format, did you mistype something
    INVALID_FORMAT = 3,
    //This is taken, do you have an account already?
    ALREADY_EXISTS = 4,
    //Needs to be filled in
    MISSING = 5,
}

