import Mock from 'mockjs'
import data from './data'

Mock.mock('/menus', {code: 0, data: data.menus})


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


//正品秒杀1折秒


const titleArray = data.datas.filter(item => item.type_name ==='栏目菜单二').map(item => item.menus)
console.log(titleArray)
Mock.mock('/title_array', {code: 0, data: titleArray})
