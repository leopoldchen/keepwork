<template>
  <div class='kp-theme-seletor'>
    <el-select :value='themeConf.name' placeholder='请选择样式' filterable @change='changeTheme'>
      <el-option v-for='t in themes' :key='t.name' :label='t.name' :value='t.name' />
    </el-select>
    <el-select :value='themeConf.colorID' placeholder='请选择配色' @change='changeThemeColor'>
      <el-option v-for='(t, index) in theme.colors' :key='index' :label='index' :value='index' />
    </el-select>
    <el-select :value='themeConf.fontID' placeholder='请选择字体' @change='changeThemeFont'>
      <el-option v-for='(t, index) in theme.fonts' :key='index' :label='index' :value='index' />
    </el-select>
  </div>
</template>

<script>
import themes from '@/lib/theme/theme.data'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      themes
    }
  },
  computed: {
    ...mapGetters({
      themeConf: 'themeConf'
    }),
    theme() {
      return this.themes[this.themeConf.name]
    }
  },
  methods: {
    changeTheme(themeName) {
      this.$store.dispatch('changeTheme', themeName)
    },
    changeThemeFont(fontID) {
      this.$store.dispatch('changeThemeFont', fontID)
    },
    changeThemeColor(colorId) {
      this.$store.dispatch('changeThemeColor', colorId)
    }
  }
}
</script>
