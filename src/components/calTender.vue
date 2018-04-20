<template>
  <div>

  <div style="width:500px">
    <Button type="primary" @click="disabled=!disabled">锁定编号</Button>
  <Select v-model="model1" style="width:200px" :disabled="disabled">
    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
  </div>

    <div style="width:500px;padding-top:20px">

     <Input v-model="companyValue" number placeholder="输入报价..." style="width: 200px"></Input>
      <Select v-model="model3" style="width:100px">
        <Option v-for="item in unit" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Button type="primary" @click="reEnter">确认报价</Button>
    </div>
  <div style="width:500px;padding-top:20px">
    <Button type="primary" @click="queryInput">查询输入</Button>
    <Button type="primary" @click="calTender">计算标底</Button>
</div>
  </div>
</template>
<script>

  export default {

    data () {
      return {
        total :0,
        inputObj :[],
        unit :[
          {
            value:'元',
            label:'元'
          },
          {
            value:'万元',
            label:'万元'
          },
          {
            value:'千万元',
            label:'千万元'
          }
        ],
        model3:'万元',
        cityList: [
          {
            value: '皖E20180420-1',
            label: '皖E20180420-1'
          },
          {
            value: '皖E20180420-2',
            label: '皖E20180420-2'
          },
          {
            value: '皖E20180420-3',
            label: '皖E20180420-3'
          },
          {
            value: '皖E20180420-4',
            label: '皖E20180420-4'
          },
          {
            value: '皖E20180420-5',
            label: '皖E20180420-5'
          },
          {
            value: '皖E20180420-6',
            label: '皖E20180420-6'
          }
        ],
        model1: '',
        disabled: true
      }
    },
    methods:{
      //  记录所有的输入到inputObj
      reEnter() {
        // 校验companyValue
        this.total +=1;
        var cv={};
        cv[this.total]=this.companyValue;
        this.inputObj.push(cv);
        console.log(this.inputObj);
      },
      queryInput(){

      }
    }
  }
</script>
