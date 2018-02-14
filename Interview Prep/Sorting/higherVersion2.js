function higherVersion2(ver1, ver2) {
    var ver1 = ver1.split(".");
    var ver2 = ver2.split(".");

    var count = 0;
    var test = 0;
    while (count < ver1.length){
        if (parseInt(ver1[count]) > parseInt(ver2[count])){
            test = 1;
            break;
        } else if (parseInt(ver2[count]) > parseInt(ver1[count])){
            test = -1;
            break;
        }
        count++
    }
    return test;

}
