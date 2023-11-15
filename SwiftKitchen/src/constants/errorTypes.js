// these are documented in the user docs, but its what returned by the api when there are error
// we yse it currently in middleware/errorListener to handle generic errors.
export const AUTHENTICATION_EXCEPTION = "AuthenticationException";
export const ACCESS_DENIED = "AccessDeniedHttpException";
