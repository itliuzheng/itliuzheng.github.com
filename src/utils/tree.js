
// const data = [
//     { id:1, pId:0, name:"父节点1 "},
//     { id:11, pId:1, name:"父节点11 "},
//     { id:114, pId:11, name:"叶子节点"},
//     { id:12, pId:1, name:"父节点12"},
//     { id:124, pId:12, name:"叶子节点"},
//     { id:13, pId:1, name:"父节点13 "},
//     { id:2, pId:0, name:"父节点2"},
//     { id:21, pId:2, name:"父节点21"},
//     { id:214, pId:21, name:"叶子节点"},
//     { id:22, pId:2, name:"父节点22 "},
//     { id:224, pId:22, name:"叶子节点"},
//     { id:23, pId:2, name:"父节点23"},
//     { id:234, pId:23, name:"叶子节点"},
//     { id:3, pId:0, name:"父节点3 "}
// ]
//
//
//
// const DATA = reconstruction(data);

//定义一些变量
//具体方法
export function arrToTree(sNodes){
    var key='id',parentKey='parentId',childKey='children';
    var r = [];
    var tmpMap = {};

    //先把数组整理成map的形式
    for (let i = 0, l = sNodes.length; i < l; i++) {
       // key为 对象的"id"的值， value就是就该对象
        tmpMap[sNodes[i][key]] = sNodes[i];
    }

   //遍历，组织成子孙节点
    for (let i = 0, l = sNodes.length; i < l; i++) {
        //查找当前节点的父节点是否存在，如果存在就把当前节点放入到父节点的子孙列表中
        if (tmpMap[sNodes[i][parentKey]] && sNodes[i][key] != sNodes[i][parentKey]) {
            if (!tmpMap[sNodes[i][parentKey]][childKey])
                tmpMap[sNodes[i][parentKey]][childKey] = [];
            tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i]);
        } else {
           //如果不存在就直接放入到一个新的列表中
            r.push(sNodes[i]);
        }
    }
    return r;
}
//定义一些变量
//具体方法
export function reconstruction(sNodes){
    var key='id',parentKey='parentId',childKey='children';
    var r = [];
    var tmpMap = {};

    for(let i = 0;i< sNodes.length;i++){
      for(let name in sNodes[i]){
        sNodes[i].label = sNodes[i].name+'-----'+sNodes[i].targetUrl
      }
    }

    //先把数组整理成map的形式
    for (let i = 0, l = sNodes.length; i < l; i++) {
       // key为 对象的"id"的值， value就是就该对象
        tmpMap[sNodes[i][key]] = sNodes[i];
    }

   //遍历，组织成子孙节点
    for (let i = 0, l = sNodes.length; i < l; i++) {
        //查找当前节点的父节点是否存在，如果存在就把当前节点放入到父节点的子孙列表中
        if (tmpMap[sNodes[i][parentKey]] && sNodes[i][key] != sNodes[i][parentKey]) {
            if (!tmpMap[sNodes[i][parentKey]][childKey])
                tmpMap[sNodes[i][parentKey]][childKey] = [];
            tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i]);
        } else {
           //如果不存在就直接放入到一个新的列表中
            r.push(sNodes[i]);
        }
    }
    return r;
}
export function reconstructionCode(sNodes){
    var key='code',parentKey='parentCode',childKey='children';
    var r = [];
    var tmpMap = {};

    //先把数组整理成map的形式
    for (let i = 0, l = sNodes.length; i < l; i++) {
       // key为 对象的"id"的值， value就是就该对象
        tmpMap[sNodes[i][key]] = sNodes[i];
    }

   //遍历，组织成子孙节点
    for (let i = 0, l = sNodes.length; i < l; i++) {
        //查找当前节点的父节点是否存在，如果存在就把当前节点放入到父节点的子孙列表中
        if (tmpMap[sNodes[i][parentKey]] && sNodes[i][key] != sNodes[i][parentKey]) {
            if (!tmpMap[sNodes[i][parentKey]][childKey])
                tmpMap[sNodes[i][parentKey]][childKey] = [];
            tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i]);
        } else {
           //如果不存在就直接放入到一个新的列表中
            r.push(sNodes[i]);
        }
    }
    return r;
}
