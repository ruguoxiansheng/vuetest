<template>
  <Table :columns="columns" :data="data"></Table>
</template>
<script>
  export default {
    props: ['data'],
    data () {
      return {
        columns: [
          {
            title: '序号',
            key: 'orderNumber'
          },
          {
            title: '公司报价',
            key: 'companyValue'
          }
        ],
        data: [ ]
      }
    }
  }
</script>
