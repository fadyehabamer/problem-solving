function percentageChanged(oldPrice, newPrice) {
    // prices may come as "$800"; strip everything but digits and the decimal point
    var old_value = parseFloat(String(oldPrice).replace(/[^0-9.]/g, ""));
    var new_value = parseFloat(String(newPrice).replace(/[^0-9.]/g, ""));
    // (new - old) / old: the old code divided before subtracting
    var change = (new_value - old_value) / old_value * 100;
    return Math.abs(change) + "% " + (change < 0 ? "decrease" : "increase");
}
percentageChanged(800, 600)