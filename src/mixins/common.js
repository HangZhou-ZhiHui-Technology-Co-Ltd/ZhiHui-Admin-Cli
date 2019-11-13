import { isObject } from 'lodash'

/**
 * 判空
 * ---
 * @param {String | Array} value 待校验的值
 * ---
 * _is_empty([])        ->  true
 * _is_empty({})        ->  true
 * _is_empty(null)      ->  true
 * _is_empty(undefined) ->  true
 */
export function isEmpty (value) {
  if (value === null || value === undefined) {
    return true
  }
  if (isObject(value) && Object.values(value).length === 0) {
    return true
  }
  return /^[\s\xa0]*$/.test(value)
}

export default {
  methods: {
    isEmpty
  }
}
