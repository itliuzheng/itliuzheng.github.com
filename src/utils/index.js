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

