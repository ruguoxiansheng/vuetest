<template>
  <Form >

    <FormItem>
        <span>开标时间：</span>
        <DatePicker type="date" placeholder="选择开标时间...." v-model="date"></DatePicker>
    </FormItem>


    <FormItem >

      <Button type="primary" @click="disabled=!disabled">锁定编号</Button>
      <Select v-model="select" style="width:200px" :disabled="disabled">
        <Option v-for="item in projectNumber" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>

    </FormItem>

    <FormItem>
      <div >
       <!--<Table width="550" style="margin-right: auto;margin-left:auto" :columns="randColumn" :data="randData"></Table>-->
        <div v-for="(value, key) in items">
          <i-input disabled :value="key" style="width:40px"> </i-input><i-input :value="value" style="width:100px"></i-input>
        </div>
      </div>
    </FormItem>

    <FormItem>
      <Input v-model="companyName"  number placeholder="请输入公司..." style="width: 200px" clearable ></Input>
      <Input v-model="companyValue"  placeholder="输入报价..." style="width: 200px"></Input>
      <Select v-model="defaultUnit" style="width:100px">
        <Option v-for="item in unit" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Button type="primary" @click="reEnter">确认报价</Button>
    </FormItem>

    <FormItem>
        <Button type="primary" @click="queryInput">查询输入</Button>
        <Button type="primary" @click="calTender">计算标底</Button>
    </FormItem>

  </Form>
</template>
<script>
  import inputView from '@/content/inputView.vue';

  export default {
    data () {
      return {
        total :0,
        inputObj :[],
        select: '',
        date: '',
        disabled: true,
        companyValue:'',
        companyName:'',
        defaultUnit:'万元',
        columns : [
          {
            title: '序号',
            key: 'orderNumber'
          },
          {
            title:'公司名称',
            key:'companyName'
          },
          {
            title: '公司报价',
            key: 'companyValue'
          }
        ],
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
        projectNumber: [
          {
            value: '皖E20180420-1',
            label: '皖E20180420-1'
          },
          {
            value: '皖E20180420-2',
            label: '皖E20180420-2'
          }
        ],
        items: {
          x: 0,
          y: 0,
          z: 0
        },
        randColumn: [
          {
            title: 'X',
            key: 'x'
          },
          {
            title: 'Y',
            key: 'y'
          },
          {
            title: 'Z',
            key: 'z'
          },
          {
            title: 'M',
            key: 'm'
          },
          {
            title: 'N',
            key: 'n'
          },
          {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 80,
            height:50,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    click:"randomEdit",
                    type: 'text',
                    size: 'small'
                  }
                }, '编辑')
              ]);
            }
          }
        ],
        randData: [
          {
            x: 0,
            y: 0,
            z: 0,
            m:0,
            n:0
          }
        ]
      }
    }// end of data
    ,
    methods :{
      //  记录所有的输入到inputObj
      reEnter() {
        // 校验companyValue
        this.total +=1;
        //  序号   //  companyValue
        var ordN={"orderNumber" :this.total,"companyName":this.companyName,"companyValue" :this.companyValue};
        this.inputObj.push(ordN);
        this.companyValue='';
        this.companyName='';
        this.$Message.success('输入成功，请继续.....');
        console.log(this.inputObj);
      },
      // 弹出输入的价格
      queryInput(){
        const _this = this;
        this.$Modal.info({
          render: (h) => {
            return h(inputView, {
              props: {
                columns:_this.columns,
                data : _this.inputObj
              }
            })
          }
        })
      },

      // 计算标底的方法
      calTender() {
        const _this = this;
        let url= 'http://127.0.0.1:8077/vue/calTender';
        let params = {
          data:this.inputObj
        };
        this.$http.post(url,params).then(function (response) {
          if (response.status === 200) {
            //axions 中如果用this 就会undefined
            _this.data1=response.data.pageData;
            _this.dataCount=response.data.totalSize;
          }
          console.log(response.data.message);
        })
          .catch(function (error) {
            console.log(error);
            _this.instance('error',error);
          });
      },

      // 编辑随机数
      randomEdit() {
        const _this = this;
        this.$Modal.info({
          render: (h) => {
            return h(randomEdit, {
              props: {
                randData:_this.randData
              }
            })
          }
        })
      }

    }// end of methods
  }
</script>
