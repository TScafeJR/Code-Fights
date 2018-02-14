function swapLexOrder(str, pairs) {
        var map = {};
    pairs.forEach(function (pair) {
        var x = pair[0] -1;
        var y = pair[1] -1;
        var map_x = map[x];
        var map_y = map[y];
        if (map_x && map_y && map_x  === map_y) {
            return;
        }
        if (map_x && map_y && map_x!==map_y) {
            var new_list = merge(map_x, map_y);
            new_list.forEach(function (index) {
                map[index] = new_list;
            })
        } else if (!map_x && !map_y) {
            map[x] = map[y] = [Math.min(x,y), Math.max(x,y)];
        } else if (map_x) {
            insert(map_x, y);
            map[y] = map_x;
        } else {
            insert(map_y, x);
            map[x] = map_y;
        }
    });
    var new_map =[];
    for (var key in map) {
        var test = map[key];
        if (test) {
            new_map.push(test);
        }
        for (var i = 0; i< test.length; i++) {
            delete map[test[i]];
        }
    }
    var result = str;
    console.log(new_map);
    new_map.forEach(function (set) {
        var pickChar = set.map(function (index) {
            return str.charAt(index);
        }).sort().reverse();
        result = pickChar.reduce(function (text, character, index) {
            index = set[index];
            return text.substr(0, index) + character + text.substr(index+character.length);
        },result);
    });
    return result;
}


function insert(list, x) {    
    console.log(list);
  list.splice(locationOf(x, list) + 1, 0, x);
    console.log(list);
}

function merge(list_1, list_2) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i <list_1.length && j < list_2.length) {
        if (list_1[i] < list_2[j]) {
            result.push(list_1[i]);
            i++;
        } else {
            result.push(list_2[j]);
            j++;
        }
    }
    if (i<list_1.length) {
        result = result.concat(list_1.slice(i));
    }
    if (j<list_2.length) {
        result = result.concat(list_2.slice(j));
    }
    
    return result;
}

function locationOf(element, array, start, end) {
  start = start || 0;
  end = end || array.length;
  var pivot = parseInt(start + (end - start) / 2, 10);
  if (array[pivot] === element) return pivot;
  if (end - start <= 1)
    return array[pivot] > element ? pivot - 1 : pivot;
  if (array[pivot] < element) {
    return locationOf(element, array, pivot, end);
  } else {
    return locationOf(element, array, start, pivot);
  }
}
