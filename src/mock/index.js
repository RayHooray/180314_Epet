import Mock from 'mockjs'
import data from './data'

Mock.mock('/menus', {code: 0, data: data.menus})
console.log(data.menus)


//图片轮播
/*
const bannerImg = data.datas.filter(item => item.index==='3132').map(item => item.value)[0][1]
Mock.mock('/banner', {code: 0, data: bannerImg})
console.log(bannerImg.image)
*/

const lunBoimgs = data.datas.filter(item => item.type_name ==='图片轮播广告').map(item => item.value)
const lunBos = lunBoimgs.filter((item, index) => {
  return index===0||index===7
})
Mock.mock('/lunbos', {code: 0, data: lunBos})


//导航menu数据
const titleArray = data.datas.filter(item => item.type_name ==='栏目菜单二').map(item => item.menus)[0]
console.log(titleArray)
Mock.mock('/title_array', {code: 0, data: titleArray})

//vip尊享服务
const vipImg = data.datas.filter(item => item.index === '3140').map(item => item.content_images)[0][0]

console.log(vipImg)
Mock.mock('/vip_img', {code: 0, data: vipImg})

