function simplifyPath(path) {
    var pathArr = path.split("/");
    var ret = [];
    for(var x = 0; x < pathArr.length; x++)
    {
        if(pathArr[x] != "")
        {
            if(pathArr[x] == "..")
                ret.pop();
            
            else if(pathArr[x] != ".")
            {
                console.log(pathArr[x]);
                ret.push(pathArr[x]);
            }
        }
    }
    
    return "/" + ret.join("/");
    
}
