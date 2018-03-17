import ajax from './ajax'

export const reqMenus = () => ajax('/menus')

export const reqLunbos = () => ajax('/lunbos')

export const reqTitle = () => ajax('/title_array')
