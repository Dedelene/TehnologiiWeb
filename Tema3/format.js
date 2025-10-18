function formatString(s, ...format){
    let str = s;
    for(let i = 0; i < format.length; i++) {
        if(str.indexOf('{' + 'substantiv' + '}') !== -1)
            str = str.replace('{' + 'substantiv' + '}', format[i]);
        if(str.indexOf('{' + 'adjectiv' + '}') !== -1)
            str = str.replace('{' + 'adjectiv' + '}', format[i]);
    }
    return str;
}

console.log(formatString("Have a {adjectiv} {substantiv}!", 'nice', 'day'));