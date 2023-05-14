/**
 * JWT: secure your api
 * -------------------------
 *          CREATE TOKEN
 * -------------------------
 * 
 * 1. client: after user login send user basic info to create token
 * 2. in the server side: installl npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {express})
 * 5. return token to the client side
 * 6. after reciving the token store it either httponly cookies or localstorage (second best solution)
 * 7. use a general spacce onAuthStateChange > AuthProvider
 * -------------------------------------
 *      send token to server
 * -----------------------------------
 * 
 * 1. for sensitive api call () send authorization headers {authorization: 'Bearer token'}
 * 
 * -------------------------------
 *      verify token
 * --------------------------------
 * 
 * 
 * 
 */