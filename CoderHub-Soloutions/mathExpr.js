function mathExpr(expr) {
    // console.log(/[a-zA-Z]/.test(expr))
    try {
        if (typeof eval(expr) === "number" && expr.includes("&") === false) {
            console.log(true , eval(expr))
        } else {
            console.log(false)
        }
    } catch (e) {
        console.log(false);
    }
}
mathExpr('7&0')