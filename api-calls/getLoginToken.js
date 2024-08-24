import * as nodeFetch from "node-fetch"

export const getLoinToken = async () => {
    const params = new URLSearchParams();
    params.append('login', 'daskindderblumen@gmail.com');
    params.append('password', 'register_me&QUICK');
    params.append('remember', 0);
    params.append('remember', 1);
    params.append('wa_auth_login', 1);
    //params.append('_csrf', null);
    params.append('wa_json_mode', 1);
    params.append('need_redirects', 1);

    const response = await nodeFetch("https://datika.me/en/login/", {
        method: "POST",
        body: params
    });
    if (response.status !== 200) {
        throw new Error("Error in form params request");
    }
    
    //const responseHeaders = await response.headers.raw()['set-cookie']
    //return responseHeaders.toString();


}