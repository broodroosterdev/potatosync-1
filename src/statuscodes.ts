export enum VerifyStatusCode {
    TOKEN_NOT_FOUND,
    TOKEN_EXPIRED,
    ACCOUNT_VERIFIED,
    ACCOUNT_ALREADY_VERIFIED,
    EMAIL_SENT,
    INTERNAL_SERVER_ERROR
}

export enum LoginStatusCode {
    INVALID_CREDENTIALS,
    USER_NOT_FOUND,
    USER_NOT_VERIFIED,
    LOGGED_OUT,
    INVALID_TOKEN,
    INVALID_SESSION
}

export enum ValidationStatusCode {
    VALID = 0,
    TOO_SHORT = 1,
    TOO_LONG = 2,
    INVALID_FORMAT = 3,
    ALREADY_EXISTS = 4,
    MISSING = 5,
}

