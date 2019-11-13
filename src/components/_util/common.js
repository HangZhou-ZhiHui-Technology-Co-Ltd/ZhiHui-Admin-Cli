import { isObject } from 'lodash'

/**
* 判空
* ---
* @param {String | Array} data 校验内容
* ---
* _is_empty([])        ->  true
* _is_empty({})        ->  true
* _is_empty(null)      ->  true
* _is_empty(undefined) ->  true
* ---
*/
export function _is_empty (data) {
  return (data === null || data === undefined || (isObject(data) && Object.values(data).length === 0)) ? true : /^[\s\xa0]*$/.test(data)
}

/**
* 获取对象
* -
* @param {Object} data 数据
* @param {Object} def  默认值
* -
*/
export function _get (data, def) {
  if (this._is_empty(data)) {
    return def || '------'
  } else {
    return data
  }
}
