
// Q1 solution




const check_bracket = (str) =>{
    let x = [];
    let y = ["[", "{", "("];
    let z = ["]", "}", ")"];

    for (i = 0; i < str.length; i++) {
        if (y.includes(str[i])) {
            x.push(str[i])
        }
        else if (z.includes(str[i])) {
            closeIndex = z.indexOf(str[i])
            lastIndex = y.indexOf(x[x.length - 1])
            if (closeIndex === lastIndex) {
                x.pop()
            }
            else {
                return i + 1
            }
        }
 
    }
    if (x.length == 0) {
        return "Success"
    }
    else {
        return str.indexOf(x[x.length - 1]) + 1
    }
 
}

