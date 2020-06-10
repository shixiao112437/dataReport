import request from '@/utils/request'
// 获取logo
export function getLogo () {
  return request({
    url: '/union/selectDatabase'
  })
}
// 获取表名
export function getTable () {
  return request({
    url: '/union/selectAllTables'
  })
}
// 通过表名获取数据
export function dataByName (params) {
  return request({
    url: '/union/selectAllFields',
    params: {
      table: params
    }
  })
}
