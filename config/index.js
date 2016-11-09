/**
 * Created by joe on 2016/10/15.
 */

const path = require('path');
const opts = {
    static: path.join(__dirname, '../static'),// 静态文件目录
    layout: path.join(__dirname, '../layouts'),// layout文件目录
    page: {
        src: path.join(__dirname, '../src/pages'),
        build: path.join(__dirname, '../dist/pages')
    },
    components: path.join(__dirname, '../components'),
    root: path.join(__dirname, '../'),
    port: 3000//端口
    // domain: 'mars.quancheng-ec.com',
    // saluki: {
    //     root:path.join(__dirname,'../node_modules/quancheng-service-api/src/main/proto'),
    //     group: 'Default',
    //     host: 'daily.quancheng-ec.com',
    //     port: '8500',
    //     services: {
    //         helloworld: 'helloworld.Greeter',
    //         projectService: 'com.quancheng.hemera.service.ProjectService:1.0.0',
    //         helloService: 'com.quancheng.examples.service.HelloService:Default:1.0.0',
    //         resourceService: 'com.quancheng.hemera.service.ResourceService'
    //     }
    // }
}

module.exports = opts;