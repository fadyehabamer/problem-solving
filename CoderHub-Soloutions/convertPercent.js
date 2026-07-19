function convertPercent(percentage) {
	// remove % sign
    percentage = percentage.replace("%", "");
    // convert to float
    percentage = parseFloat(percentage);
    // convert to decimal
    percentage = percentage / 100;
    // return
    return percentage;
}