function get_available_IPs(ip1, ip2, addresses) {
    // ip1 , ip2 is formatted as "x.x.x.x"
    // addresses is an array of strings formatted as "x.x.x.x"
    // arrange addresses between ip1 and ip2 descending order
    // write your code here
    // return the number of available ips

    let ip1Arr = ip1.split(".");
    let ip2Arr = ip2.split(".");
    let ip1Num = parseInt(ip1Arr[0]) * 256 * 256 * 256 + parseInt(ip1Arr[1]) * 256 * 256 + parseInt(ip1Arr[2]) * 256 + parseInt(ip1Arr[3]);
    let ip2Num = parseInt(ip2Arr[0]) * 256 * 256 * 256 + parseInt(ip2Arr[1]) * 256 * 256 + parseInt(ip2Arr[2]) * 256 + parseInt(ip2Arr[3]);

    let ip1NumArr = [];
    let ip2NumArr = [];
    let addressesNumArr = [];

    for (let i = 0; i < addresses.length; i++) {
        let addressArr = addresses[i].split(".");
        let addressNum = parseInt(addressArr[0]) * 256 * 256 * 256 + parseInt(addressArr[1]) * 256 * 256 + parseInt(addressArr[2]) * 256 + parseInt(addressArr[3]);
        addressesNumArr.push(addressNum);
    }
    
    addressesNumArr.sort((a, b) => b - a);

    let availableIPs = [];
    for (let i = 0; i < addressesNumArr.length; i++) {
        if (addressesNumArr[i] > ip1Num && addressesNumArr[i] < ip2Num) {
            availableIPs.push(addressesNumArr[i]);
        }
    }

    // return availableIPs as an array of strings formatted as "x.x.x.x"
    let availableIPsStr = [];
    for (let i = 0; i < availableIPs.length; i++) {
        let ip = availableIPs[i];
        let ipArr = [];
        ipArr.push(Math.floor(ip / (256 * 256 * 256)));
        ipArr.push(Math.floor((ip % (256 * 256 * 256)) / (256 * 256)));
        ipArr.push(Math.floor((ip % (256 * 256)) / 256));
        ipArr.push(ip % 256);
        availableIPsStr.push(ipArr.join("."));
    }
    return availableIPsStr;
    






    


}

    console.log(get_available_IPs('1.1.1.1', '255.255.255.255', ['193.168.10.20','221.155.1.5','194.200.1.5','192.168.1.1']));
    