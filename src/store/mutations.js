import {
  RECEIVE_MENUS,
  RECEIVE_LUNBOS,
  RECEIVE_TITLES,
  RECEIVE_VIP_IMGS
} from "./mutations-type";

export default {
  [RECEIVE_MENUS] (state, {menus}) {
    state.menus = menus
  },
  [RECEIVE_LUNBOS] (state, {lunBos}) {
    state.lunBos = lunBos
  },
  [RECEIVE_TITLES] (state, {titles}) {
    state.titles = titles
  },
  [RECEIVE_VIP_IMGS] (state, {vipImgs}) {
    state.vipImgs = vipImgs
  }
}
