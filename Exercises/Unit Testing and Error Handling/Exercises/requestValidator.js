function requestValidator(obj) {
    if (obj.method !== 'GET' || obj.method !== 'POST' || obj.method !== "DELETE" || obj.method !== 'CONNECT') {
        throw new Error(`Invalid request header: Invalid Method.`)
    }else if(obj.uri === "" || obj.uri){
        throw new Error(`Invalid request header: Invalid URI.`)
    }else if(obj.version !=='HTTP/0.9' || obj.version!=='HTTP/1.0' || obj.version !=='HTTP/1.1' || obj.version !=='HTTP/2.0'){
        throw new Error(`Invalid request header: Invalid Version.`)
    }
    return obj;
}

console.log(requestValidator(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
))
