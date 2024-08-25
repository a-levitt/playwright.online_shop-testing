import * as nodeFetch from "node-fetch"

export const getLoinToken = async (login, password) => {
    const params = new URLSearchParams();
    params.append('login', login);
    params.append('password', password);
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

    const resp = await response.cookies().toString();
    return resp;
    
    //const responseHeaders = await response.headers.raw()['set-cookie']
    //return responseHeaders.toString();


}