import modFactory from '@/lib/mod/factory'
import Vue from 'vue'

const state = {
  activePage: '',
  modList: [],
  activeMod: null,
  activeProperty: null,
  // layout: {
  //   header: {},
  //   footer: {},
  //   siderbar: {}
  // },
  theme: {
    name: 'light',
    colorID: 0,
    fontID: 0
  }
}

const getters = {
  themeConf: state => state.theme,
  modList: state => state.modList,
  activeMod: state => state.activeMod,
  activeProperty: state => state.activeProperty,
  hasActiveMod: state => !!state.activeMod,
  hasActiveProperty: state => !!state.activeProperty
}

const actions = {
  addMod({ commit }, params) {
    const mod = modFactory.generate(params.modName)
    commit('ADD_MOD', {
      mod: mod,
      key: params.preModKey
    })
    commit('SET_ACTIVE_MOD', mod)
  },
  setActiveMod({ commit }, mod) {
    commit('SET_ACTIVE_MOD', mod)
    commit('SET_ACTIVE_PROPERTY', null)
  },
  setActiveProperty({ commit }, params) {
    commit('SET_ACTIVE_MOD', params.mod)
    commit('SET_ACTIVE_PROPERTY', params.property)
  },
  deleteMod({ commit }, mod) {
    commit('DELETE_MOD', mod)
    if (mod === state.activeMod) {
      commit('SET_ACTIVE_MOD', null)
      commit('SET_ACTIVE_PROPERTY', null)
    }
  },
  updateActiveModStyle({ commit }, styleID) {
    commit('UPDATE_ACTIVE_MOD_STYLE', styleID)
  },
  changeTheme({ commit }, themeName) {
    commit('UPDATE_THEME_NAME', themeName)
    commit('UPDATE_THEME_COLOR', 0)
    commit('UPDATE_THEME_FONT', 0)
  },
  changeThemeColor({ commit }, colorID) {
    commit('UPDATE_THEME_COLOR', colorID)
  },
  changeThemeFont({ commit }, fontID) {
    commit('UPDATE_THEME_FONT', fontID)
  }
}

const mutations = {
  ADD_MOD(state, { mod, key }) {
    let index = 0
    if (key) index = state.modList.map(el => el.key).indexOf(key)
    state.modList.splice(index + 1, 0, mod)
  },
  DELETE_MOD(state, mod) {
    let index = state.modList.map(el => el.key).indexOf(mod.key)
    Vue.delete(state.modList, index)
  },
  SET_ACTIVE_MOD(state, mod) {
    if (state.activeMod === mod) return
    if (state.activeMod) Vue.set(state.activeMod, 'isActive', false)
    if (mod) Vue.set(mod, 'isActive', true)
    Vue.set(state, 'activeMod', mod)
  },
  SET_ACTIVE_PROPERTY(state, property) {
    if (!state.activeMod) return
    Vue.set(state, 'activeProperty', property)
  },
  UPDATE_ACTIVE_MOD_ATTRIBUTES(state, { key, value }) {
    state.activeMod.key = value
  },
  UPDATE_ACTIVE_MOD_STYLE(state, styleID) {
    Vue.set(state.activeMod, 'styleID', styleID)
  },
  UPDATE_MODS(state, mods) {
    Vue.set(state, 'modList', mods)
  },
  UPDATE_THEME_NAME(state, themeName) {
    Vue.set(state.theme, 'name', themeName)
  },
  UPDATE_THEME_COLOR(state, colorID) {
    Vue.set(state.theme, 'colorID', colorID)
  },
  UPDATE_THEME_FONT(state, fontID) {
    Vue.set(state.theme, 'fontID', fontID)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
