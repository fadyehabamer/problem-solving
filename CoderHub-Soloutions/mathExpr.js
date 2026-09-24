function mathExpr(expr) {
    try {
        return typeof eval(expr) === "number" && expr.includes("&") === false;
    } catch (e) {
        return false;
    }
}
console.log(mathExpr('7&0'));
