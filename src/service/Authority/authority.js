/*
 * @Descripttion:
 * @version:
 * @Author: BurNing
 * @Date: 2020-12-26 10:26:11
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-26 11:32:17
 */

//发送getAllAuthPosition请求前数据的预处理
export function getAllAuthPositionProcess(pageNumber, pageSize, positionName) {
  var obj = new Object();
  obj.pageNumber = pageNumber;
  obj.pageSize = pageSize;
  obj.positionName = positionName == undefined ? "" : positionName;
  return obj;
}

//获得getAllDeptForms数据后的处理
export function getAllDeptFormsFilter(data) {
  var result = data;
  var arr = new Array();
  var i = 0;
  result.forEach((item) => {
    let obj = new Object();
    obj.label = item.deptName;
    obj.id = item.id;
    obj.children = new Array();
    item.forms.forEach((item1, index1) => {
      let obj2 = new Object();
      obj2.label = item1.form;
      obj2.id = item.id;
      obj2.children = [
        { key: i, label: "编辑" },
        { key: i + 1, label: "查看" },
      ];
      i += 2;
      obj.children.push(obj2);
    });
    arr.push(obj);
  });
  return arr;
}

//预备数据
export var formname = [
  {
    id: 0,
    allowModify: false,
    allowQuery: false,
    formId: 1,
    formName: "打样单",
    deptName: "业务部",
  },
  {
    id: 0,
    allowModify: false,
    allowQuery: false,
    formId: 2,
    formName: "大货规格书",
    deptName: "业务部",
  },
  {
    id: 0,
    allowModify: false,
    allowQuery: false,
    formId: 3,
    formName: "计划表",
    deptName: "业务部",
  },
  {
    id: 0,
    allowModify: false,
    allowQuery: false,
    formId: 4,
    formName: "辅料采购表",
    deptName: "业务部",
  },
];
