<template>
</template>
<script type="text/javascript">
const checkRules =[
  { value: '0',label:'空值检查'},
  { value: '1',label:'值域检查'},
  { value: '2',label:'规范检查'},
  { value: '3',label:'逻辑检查'},
  { value: '4',label:'重复数据检查'},
  { value: '5',label:'及时性检查'},
  { value: '6',label:'记录缺失检查'},
  { value: '7',label:'引用完整性检查'},
  { value: '8',label:'sql检查'}
];
const sourceType = [
  { value: '0',label: 'mysql' },
  { value: '1',label: 'oracle' },
  { value: '2',label: 'elasticsearch' },
  { value: '3',label: 'hbase' },
  { value: '4',label: 'hive' },
  { value: '5',label: 'kafka' }
];
const userType = [
  { value: '0', label: '管理员'},
  { value: '1', label: '普通用户'}
];

const fusionMode = [
  { value: '0', label: 'full join'},
  { value: '1', label: 'left join'},
  { value: '2', label: 'right join'},
  { value: '3', label: 'inner join'}
];

function getStateName (value, arr) {
  for(var i = 0;i<arr.length;i++){
    if(arr[i].value === value){
      return arr[i].label
    }
  }
}
export default{
  checkRules,
  sourceType,
  userType,
  fusionMode
}
</script>
<style>
</style>