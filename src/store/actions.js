import {
  reqMenus,
  reqLunbos,
  reqTitle,
  reqVipImg,
} from "../api";

import {
  RECEIVE_MENUS,
  RECEIVE_LUNBOS,
  RECEIVE_TITLES,
  RECEIVE_VIP_IMGS,
} from "./mutations-type";

export default {
  async getMenus ({commit}) {
    const result = await reqMenus()
    if (result.code === 0) {
      const menus = result.data
      commit(RECEIVE_MENUS, {menus})
    }
  },
  async getLunbos ({commit}) {
    const result = await reqLunbos()
    if (result.code === 0) {
      const lunBos = result.data
      commit(RECEIVE_LUNBOS, {lunBos})
    }
  },
  async getTitle ({commit}) {
    const result = await reqTitle()
    if (result.code === 0) {
      const titles = result.data
      commit(RECEIVE_TITLES, {titles})
    }
  },
  async getVipImgs ({commit}) {
    const result = await reqVipImg()
    if (result.code === 0) {
      const vipImgs = result.data
      commit(RECEIVE_VIP_IMGS, {vipImgs})
    }
  }
}
