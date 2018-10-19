/**
 * function: mock
 * author  : wq
 * update  : 2018/9/18 18:46
 */
import Mock from 'mockjs'
import * as APIS from '../defined'

const mockApi = {}
const mockEnvSuccessOrFail = function () {
  const random = Math.random() * 100
  if (random >= 95) {
    return {
      statusCode: 403,
      headers: '',
      responseText: null
    }
  } else {
    return {
      statusCode: 200,
      headers: '',
      responseText: {}
    }
  }
}
const mockProtocolSuccessOrFail = function () {
  const random = Math.random() * 100
  if (random > 90) {
    return {
      code: '2',
      msg: 'error',
      success: false
    }
  } else {
    return {
      code: '200',
      msg: '成功',
      success: true,
      result: {}
    }
  }
}

mockApi[APIS.getdingtalkconfig] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": {
      "timeStamp": 1516695281,
      "agentid": "40839978",
      "jsticket": "4bELeqELRAUPzxAD7haY6nBwHULBaaINdMjAz7X20i56NyRKN4aN4jOKUZe772aQaVnErJnd6cYHtpUsPHULKc",
      "corpId": "ding4d77c3a0de79a832",
      "signature": "f46f19795d017f07c0b580a0a33e496730ec86cb",
      "accessToken": "525188d107a3351192e3d27eb7e62a48",
      "nonceStr": "abcdefg"
    }
  }
}

mockApi[APIS.getspaceid] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": {
      "timeStamp": 1516695281,
      "agentid": "40839978",
      "jsticket": "4bELeqELRAUPzxAD7haY6nBwHULBaaINdMjAz7X20i56NyRKN4aN4jOKUZe772aQaVnErJnd6cYHtpUsPHULKc",
      "corpId": "ding4d77c3a0de79a832",
      "signature": "f46f19795d017f07c0b580a0a33e496730ec86cb",
      "accessToken": "525188d107a3351192e3d27eb7e62a48",
      "nonceStr": "abcdefg"
    }
  }
}


mockApi[APIS.getdingtalksession] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": "123456"
  }
}

mockApi[APIS.getprovincelist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "id": "100000",
      "code": "",
      "name": "直辖市",
      "type": "1",
      "parentId": "",
      "provinceId": "",
      "provinceName": "",
      "cityId": "",
      "cityName": "",
      "branchNo": "",
      "branchCode": ""
    },
      {
        "id": "130000",
        "code": "",
        "name": "河北省",
        "type": "1",
        "parentId": "",
        "provinceId": "",
        "provinceName": "",
        "cityId": "",
        "cityName": "",
        "branchNo": "",
        "branchCode": ""
      }
    ]
  }
}


mockApi[APIS.getcitylist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "id": "440100",
      "code": "",
      "name": "广州市",
      "type": "2",
      "parentId": "440000",
      "provinceId": "440000",
      "provinceName": "广东省",
      "cityId": "",
      "cityName": "",
      "branchNo": "020000",
      "branchCode": "GZ"
    },
      {
        "id": "440200",
        "code": "",
        "name": "韶关市",
        "type": "2",
        "parentId": "440000",
        "provinceId": "440000",
        "provinceName": "广东省",
        "cityId": "",
        "cityName": "",
        "branchNo": "751000",
        "branchCode": ""
      }
    ]
  }
}


mockApi[APIS.getarealist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "id": "440103",
      "code": "",
      "name": "荔湾区",
      "type": "3",
      "parentId": "440100",
      "provinceId": "440000",
      "provinceName": "广东省",
      "cityId": "440100",
      "cityName": "广州市",
      "branchNo": "020000",
      "branchCode": ""
    },
      {
        "id": "440104",
        "code": "",
        "name": "越秀区",
        "type": "3",
        "parentId": "440100",
        "provinceId": "440000",
        "provinceName": "广东省",
        "cityId": "440100",
        "cityName": "广州市",
        "branchNo": "020000",
        "branchCode": ""
      }
    ]
  }
}


mockApi[APIS.productlist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "productId": "DDKD_NJY_SER",
      "productCode": "F02",
      "productName": "大道快贷",
      "productModel": "SER",
      "productDesc": "这是一款房产抵押贷产品",
      "productImgUrl": "http://cdn.ddjf.com.cn/static/images/headimage/default.jpg"
    }]
  }
}

mockApi[APIS.willorderlist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "applyNo": "3333333333",
      "applyTime": "2018-01-23 11:29:20",
      "statusCode": "4CSBTG",
      "statusName": "初审不通过",
      "processStatusCode": "DCL",
      "processStatusName": "待处理",
      "customerName": "赵六",
      "productId": "DDKD_NJY_SER",
      "productName": "大道快贷",
      "channelName": "链家",
      "agentName": "张三"
    },
      {
        "applyNo": "11111111111111",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "2CSZ",
        "statusName": "初审中",
        "processStatusCode": "YCL",
        "processStatusName": "已处理",
        "customerName": "李四",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "DD201801230001",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "1DFQ",
        "statusName": "待发起",
        "processStatusCode": "YCL",
        "processStatusName": "已处理",
        "customerName": "张三",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "3333333333",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "4CSBTG",
        "statusName": "初审不通过",
        "processStatusCode": "YZZ",
        "processStatusName": "已终止",
        "customerName": "赵六",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "11111111111111",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "2CSZ",
        "statusName": "初审中",
        "processStatusCode": "YZZ",
        "processStatusName": "已终止",
        "customerName": "李四",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "3333333333",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "4CSBTG",
        "statusName": "初审不通过",
        "processStatusCode": "DCL",
        "processStatusName": "待处理",
        "customerName": "赵六",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "DD201801230001",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "1DFQ",
        "statusName": "待发起",
        "processStatusCode": "DCL",
        "processStatusName": "待处理",
        "customerName": "张三",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "3333333333",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "4CSBTG",
        "statusName": "初审不通过",
        "processStatusCode": "DCL",
        "processStatusName": "待处理",
        "customerName": "赵六",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "44444444444",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "5YWYSQ",
        "statusName": "业务已申请",
        "processStatusCode": "YCL",
        "processStatusName": "已处理",
        "customerName": "钱八",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "3333333333",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "4CSBTG",
        "statusName": "初审不通过",
        "processStatusCode": "YCL",
        "processStatusName": "已处理",
        "customerName": "赵六",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "DD201801230001",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "1DFQ",
        "statusName": "待发起",
        "processStatusCode": "YCL",
        "processStatusName": "已处理",
        "customerName": "张三",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      },
      {
        "applyNo": "22222222222222",
        "applyTime": "2018-01-23 11:29:20",
        "statusCode": "3CSTG",
        "statusName": "初审通过",
        "processStatusCode": "DCL",
        "processStatusName": "待处理",
        "customerName": "王五",
        "productId": "DDKD_NJY_SER",
        "productName": "大道快贷",
        "channelName": "链家",
        "agentName": "张三"
      }
    ]
  }
}


mockApi[APIS.willorderdetail] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": {
      "applyNo": "DD201801230001",
      "transAmount": 3000000.0,
      "loanAmount": 2000000.0,
      "channelForm": "AJGS",
      "channelName": "中原公司",
      "channelContact": "张三",
      "channelContactPhone": "18566992356",
      "appointQueryTime": "2017-11-27",
      "appointQueryPlace": "广东省深圳市南山区",
      "productCode": "DDKD_NJY_OTH",
      "borrowingType": "经营贷",
      "maxLoanLimit": "3000000.0",
      "customerInfo": [{
        "customerNo": "10000001",
        "name": "李四",
        "certType": "CER",
        "certNo": "152323197005303623",
        "relationType": "01",
        "customerType": "01",
        "address": "广东省深圳市南山区",
        "addressCode": "440000,440300,440305",
        "companyAddress": "广东省深圳市南山区",
        "companyAddressCode": "440000,440300,440305",
        "phone": "13955566784",
        "creditRepNum": 5,
        "batchNo": "15178954125",
        "industry": "其他",
        "customerTypeStr": "自雇人士"
      }],
      "judgeInfo": {
        // "judgeResult": "D",
        // "creditResult": "failed",
        // "judgeResultExplain": "申请人类型不详！",
        // "creditResultExplain": "征信报告不清晰！"
        "judgeResult": "P",
        "creditResult": "",
        "judgeResultExplain": "{\"partnerResultList\":[{\"access\":false,\"code\":\"hzbank\",\"hitList\":[{\"message\":\"姓名：黄金兰，行业类型：房地产相关\",\"prompt\":\"\",\"ruleName\":\"客户的行业类型属于：小额贷款、担保、房地产相关\"}],\"name\":\"杭州银行\"},{\"access\":true,\"code\":\"ajxt\",\"name\":\"爱建信托\",\"qutoa\":1000000.0}],\"quota\":1000000.0,\"recommendPartner\":\"ajxt\"}",
        "creditResultExplain": "",
        "judgeRefuseReason": "客户的行业类型属于：小额贷款、担保、房地产相关"
      },
      "houseInfo": [{
        "houseNo": "99985",
        "houseProvinceName": "河北省",
        "houseProvinceCode": "130000",
        "houseCityName": "石家庄市",
        "houseCityCode": "130100",
        "acreage": 108.0,
        "totalPrice": 700000.0,
        "isMortgaged": "否",
        "isSoleHousing": "是",
        "age": "2000",
        "purpose": "公寓",
        "projectName": "",
        "buildingName": "",
        "floor": '',
        "houseName": ""
      }],
      "productInfo": [{
        "productCode": "DDKD_YDD",
        "bpmsProductId": "DDKD_NJY_OTH",
        "productName": "大数房时贷",
        "qutoa": 1000000,
        "productMode": "自营",
        "loanOrgCode": "ajxt",
        "loanOrgName": "爱建信托",
        "insuranceOrgCode": "cbjg",
        "insuranceOrgName": "某机构",
        "applyCity": ["130000", "130400", "440000", "440300", "320000", "320100"],
        "isMatchTfb": "Y",
        "loanAmountRange": "30-500万元",
        "interestRange": "手续费3%, 月综合费率0.97%-1.22%",
        "loanTimeLimit": "6M/12M",
        "productDescribe": "大数房时贷是大数金融为解决小微企业融资难问题，推出的房产抵押产品，产品额度范围30-500万。期限可选6个月或12个月，先息后本。" +
        +"月综合费率0.97%-1.22%，借款时需付3%的手续费。" +
        +"面签资料包含：1. 借款人夫妻（如有）身份证；2. 抵押人夫妻（如有）身份证；3. 结婚证（借款人&抵押人）4. 不动产证（或房产证&土地证）5. 营业执照 6.购销合同（签订主体可为个人；需注明收款账户信息）",
        "repayMethod": "先息后本/等额本息",
        "serviceProcess": "陪同客户打征信报告 > 大道面签 > 大道终审(下户) > 完成抵押 > 银行放款"
      }, {
        "productCode": "DDKD_YDD",
        "bpmsProductId": "DDKD_NJY_OTH",
        "productName": "大数房时贷",
        "qutoa": 1000000,
        "productMode": "自营",
        "loanOrgCode": "ajxt",
        "loanOrgName": "爱建信托",
        "insuranceOrgCode": "cbjg",
        "insuranceOrgName": "某机构",
        "applyCity": ["130000", "130400", "440000", "440300", "320000", "320100"],
        "isMatchTfb": "Y",
        "loanAmountRange": "30-500万元",
        "interestRange": "手续费3%, 月综合费率0.97%-1.22%",
        "loanTimeLimit": "6M/12M",
        "productDescribe": "大数房时贷是大数金融为解决小微企业融资难问题，推出的房产抵押产品，产品额度范围30-500万。期限可选6个月或12个月，先息后本。" +
        +"月综合费率0.97%-1.22%，借款时需付3%的手续费。" +
        +"面签资料包含：1. 借款人夫妻（如有）身份证；2. 抵押人夫妻（如有）身份证；3. 结婚证（借款人&抵押人）4. 不动产证（或房产证&土地证）5. 营业执照 6.购销合同（签订主体可为个人；需注明收款账户信息）",
        "repayMethod": "先息后本/等额本息",
        "serviceProcess": "陪同客户打征信报告 > 大道面签 > 大道终审(下户) > 完成抵押 > 银行放款"
      }],
    }
  }
}

mockApi[APIS.getuploadauth] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "data": {
      "spaceId": "697566147",
      "path": "/img180124",
      "corpId": "ding79bb8067cf0e5850"
    },
    "retCode": "1",
    "retMsg": "成功"
  }
}

mockApi[APIS.downloadfrom] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功"
  }
}

mockApi[APIS.getdictbytype] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "value": "01",
      "label": "申请人",
      "type": "productName",
      "description": "产品类型",
      "sort": "10"
    },
      {
        "value": "03",
        "label": "申请人配偶",
        "type": "productName",
        "description": "产品类型",
        "sort": "20"
      },
      {
        "value": "06",
        "label": "抵押人",
        "type": "productName",
        "description": "产品类型",
        "sort": "20"
      }
    ]
  }
}


mockApi[APIS.getuniqueno] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": "2018010100001"
  }
}

mockApi[APIS.operationorder] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "3",
    "retMsg": "该房产曾经申请过该机构，确认要再次提交吗？",
    "data": "DD201801230001"
  }
}


mockApi[APIS.idcardidentified] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "data": {
      "faceInfo": {
        "address": "上海市西藏南路瞿溪路",
        "birth": "20061002",
        "name": "方大呆",
        "nationality": "汉",
        "num": "571002200610020000",
        "sex": "女"
      },
      "backInfo": {
        "startDate": "20120625",
        "endDate": "20220625",
        "office": "建瓯市公安局"
      },
      "faceUrl": "http://wechatuat.ddjf.com.cn/core/filehandle/getfile?filepath=/wls/filesave/document/ddpm_image/image_document/2018/0131/1000000385/SFZZM1517389465019.JPG",
      "backUrl": "http://wechatuat.ddjf.com.cn/core/filehandle/getfile?filepath=/wls/filesave/document/ddpm_image/image_document/2018/0131/1000000385/SFZFM1517389493268.JPG"
    },
    "retCode": "1",
    "retMsg": "成功"
  }
}
mockApi[APIS.downloadstatus] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": {
      "count": 2,
      "imageUrls": [
        "http://wechatuat.ddjf.com.cn/core/filehandle/getfile?filepath=/wls/filesave/document/ddpm_image/image_document/2017/1130/SZC0120171130500/10000057071910.png",
        "http://wechatuat.ddjf.com.cn/core/filehandle/getfile?filepath=/wls/filesave/document/ddpm_image/image_document/2017/1120/XMC0320171101001/10000057397121.jpg"
      ]
    }
  }
}

mockApi[APIS.getallarealist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "data": {
      "provinceList": [{
        "id": "130000",
        "code": "",
        "name": "河北省",
        "type": "1",
        "parentId": "",
        "provinceId": "",
        "provinceName": "",
        "cityName": "",
        "branchNo": "",
        "remarks": "",
        "branchCode": "",
        "fxtId": "",
        "createDate": 1518004441000,
        "updateDate": 1518004441000,
        "delFlag": "0"
      }, {
        "id": "130000",
        "code": "",
        "name": "河北省",
        "type": "1",
        "parentId": "",
        "provinceId": "",
        "provinceName": "",
        "cityName": "",
        "branchNo": "",
        "remarks": "",
        "branchCode": "",
        "fxtId": "",
        "createDate": 1518004441000,
        "updateDate": 1518004441000,
        "delFlag": "0"
      }],
      "areaList": [{
        "id": "130102",
        "code": "",
        "name": "长安区",
        "type": "3",
        "parentId": "130100",
        "provinceId": "130000",
        "provinceName": "河北省",
        "cityId": "130100",
        "cityName": "石家庄市",
        "branchNo": "",
        "remarks": "",
        "branchCode": "",
        "fxtId": "",
        "createDate": 1518004441000,
        "updateDate": 1518004441000,
        "delFlag": "0"
      }],
      "cityList": [{
        "id": "130100",
        "code": "",
        "name": "石家庄市",
        "type": "2",
        "parentId": "130000",
        "provinceId": "130000",
        "provinceName": "河北省",
        "cityId": "",
        "cityName": "",
        "branchNo": "311000",
        "remarks": "",
        "branchCode": "",
        "fxtId": "123",
        "createDate": 1518004441000,
        "updateDate": 1518004441000,
        "delFlag": "0"
      }]
    },
    "retCode": "1",
    "retMsg": "成功"
  }
}

mockApi[APIS.projectlist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "address": "南山后海路与创业路交汇处",
      "areaId": 72,
      "areaName": "南山区",
      "areaZipCode": "440305",
      "otherName": "踏浪",
      "projectId": "118817509602604674",
      "projectName": "浪琴屿花园",
      "x": 113.93562316894531,
      "y": 22.51380729675293
    },
      {
        "address": "南山后海路与创业路交汇处",
        "areaId": 72,
        "areaName": "南山区",
        "areaZipCode": "440305",
        "otherName": "踏浪",
        "projectId": "118817509602604674",
        "projectName": "浪琴屿花园",
        "x": 113.93562316894531,
        "y": 22.51380729675293
      }
    ]
  }
}

mockApi[APIS.buildinglist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "buildingId": "132577549232997366",
      "buildingName": "1栋",
      "totalFloor": 11
    }, {
      "buildingId": "172525441018170836",
      "buildingName": "别墅1",
      "totalFloor": 2
    }]
  }
}

mockApi[APIS.floorlist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "floor": 1
    }, {
      "floor": 2
    }, {
      "floor": 3
    }]
  }
}

mockApi[APIS.houselist] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    "retCode": "1",
    "retMsg": "成功",
    "data": [{
      "buildArea": 100,
      "floor": 2,
      "houseId": "164192001726891255",
      "houseName": "1201"
    }]
  }
}

// mockApi[APIS.getOrderById] = {
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {},
//   data: {

//   }
// }

export default mockApi
