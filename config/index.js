/**
 * Created by joe on 2016/10/15.
 */

const path = require('path');
const opts = {
  static: path.join(__dirname, '../static'),// 静态文件目录
  layout: path.join(__dirname, '../layouts'),// layout文件目录
  //clientEntry: path.join(__dirname, '../src/client.js'),// 自定义clientjs
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
  root: path.join(__dirname, '../'),
  port: 3000, //端口
  // saluki: {
  //   root: path.join(__dirname, '../service-all/api/src/main/proto'),
  //   group: ['athena-service', 'ceres-service', 'zeus-service', 'minos-service'],
  //   host: 'daily.quancheng-ec.com',
  //   port: '8500',
  //   services: {
  //     AthenaFormGroupService: 'com.quancheng.athena.service.AthenaFormGroupService:athena-service:1.0.0',
  //     AthenaExportService: 'com.quancheng.athena.service.AthenaExportService:athena-service:1.0.0',
  //     AthenaFormConfigService: 'com.quancheng.athena.service.AthenaFormConfigService:athena-service:1.0.0',
  //     AthenaFormDataService: 'com.quancheng.athena.service.AthenaFormDataService:athena-service:1.0.0',
  //     AthenaFormItemService: 'com.quancheng.athena.service.AthenaFormItemService:athena-service:1.0.0',
  //     AthenaFormService: 'com.quancheng.athena.service.AthenaFormService:athena-service:1.0.0',
  //     AthenaPropertyDataService: 'com.quancheng.athena.service.AthenaPropertyDataService:athena-service:1.0.0',
  //     AthenaWidgetService: 'com.quancheng.athena.service.AthenaWidgetService:athena-service:1.0.0',
  //     ApprovalflowService:'com.quancheng.minos.service.ApprovalflowService:minos-service:1.0.0',
  //     FormService: 'com.quancheng.ceres.service.FormService:ceres-service:1.0.0',
  //     AccountService: 'com.quancheng.zeus.service.AccountService:zeus-service:1.0.0'
  //   }
  // }
};

module.exports = opts;
