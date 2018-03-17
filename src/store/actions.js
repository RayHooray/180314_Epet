import {
  reqMenus,
  reqLunbos,
  reqTitle
} from "../api";

import {
  RECEIVE_MENUS,
  RECEIVE_LUNBOS,
  RECEIVE_TITLES
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
  }
}
