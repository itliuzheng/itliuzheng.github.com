export function parseStrEmpty(str) {
  if(!str || str == 'undefined' || str == 'null'){
    return null
  }
  return str;
}

export function jsonToUrl(json) {
  let url = '';
  for(let name in json){
    url += name +'='+json[name]+'&'
  }
  url = url.substring(0,url.length-1);
  return url;
}

export function joinJson(jsonbject1,jsonbject2) {
    var resultJsonObject={};
    for(var attr in jsonbject1){
      resultJsonObject[attr]=jsonbject1[attr];
    }
    for(var attr in jsonbject2){
      resultJsonObject[attr]=jsonbject2[attr];
    }
    return resultJsonObject;
}

