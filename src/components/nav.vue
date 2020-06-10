<template>
  <div>
    <!-- logo -->
    <h1>
      {{logo}}
      <i class="el-icon-turn-off" @click="language=!language"></i>
    </h1>
    <!-- :component-data='getComponentData'  -->
    <draggable
      v-model="tableName"
      tag="el-menu"
      :group="{ name: 'data', pull: 'clone', put: false }"
      class="list-group"
      :clone="func"
      @change="log"
      :component-data="menuData"
    >
      <el-submenu
        @open="dataByName"
        v-for="(item,index) in  tableName"
        :key="index"
        :index="item.xx1"
      >
        <template v-if="language" slot="title">{{item.xx2}}</template>
        <template v-else slot="title">{{item.xx1}}({{item.xx2}})</template>
        <el-menu-item v-for="(i,n) in item.navs" :key="n" :index="i.xx2">
          <template v-if="language" slot="title">{{i.xx2}}</template>
          <template v-else slot="title">{{i.xx1}}({{i.xx2}})</template>
        </el-menu-item>
      </el-submenu>
    </draggable>
    <hr />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getLogo, getTable, dataByName } from '@/api/indx.js'
export default {
  data () {
    return {
      logo: '',
      tableName: [],
      language: true,
      menuData: {
        on: {
          open: this.dataByName
        },
        props: {
          'background-color': '#6363e2',
          'text-color': '#000000'
        }
      }
    }
  },
  methods: {
    clone (e) {
      return {
        name: e.name + ' cloned',
        id: e.id + 'clone'
      }
    },
    func (ev) {
      return {
        ev
      }
    },
    log (e) {
      console.log('zuozuozuozuo')
      console.log(e)
    },
    // 获取logo
    async getLogo () {
      const res = await getLogo()
      this.logo = res.data
    },
    // 获取表名
    async getTableName () {
      const res = await getTable()
      console.log('表mingsdfasf')
      console.log(res)
      this.tableName = res.data
    },
    // 通过表名获取数据
    async dataByName (index) {
      console.log('展开')
      console.log(index)
      const i = this.tableName.findIndex(item => {
        return index === item.xx1
      })
      console.log(i)
      const res = await dataByName(index)
      console.log(res)
      this.tableName[i].navs = res.data
      console.log(this.tableName)
    }
  },
  computed: {
    ...mapState(['group'])
  },
  mounted () {
    this.getLogo()
    this.getTableName()
  }
}
</script>

<style>
.a {
  background-color: rgb(99, 99, 226);
}
</style>
