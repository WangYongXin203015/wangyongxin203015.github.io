"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[925],{2925:function(l,i,e){e.r(i),e.d(i,{default:function(){return n}});var o=e(6252),r=[(0,o.uE)("<h4>Web Worker</h4><ul> 调用Worker() 的构造器，指定一个脚本的 URI 来执行 worker 线程 <li>创建Worker对象 cosnt worker = new Worker(&#39;worker.js&#39;)</li><li>worker.postMessage() 传递信息</li><li>worker.onmessage 事件处理信息</li><li>协程 使用postMessage发送信息，onmessage 接受信息</li><li>大的对象 非响应数据 性能优化</li></ul><h4>WebSocket</h4><ul><li>cosnt webSocket=new WebSocket(url)</li><li>onmessage 收到信息的回调</li><li>onclse 关闭连接的回调</li><li>onerror 连接失败的回调</li><li>onopen 连接成功的回调</li><li>send 发送消息</li><li>close 关闭连接</li></ul><h4>EventSource</h4><ul><li>http持久化连接，服务器推送的网络事件接口</li><li>const eventSource = new EventSource(url)</li><li>onmessage ,onopen,onerror</li><li>close 关闭连接</li><li>不能请求发送消息</li></ul><h4>Diff算法</h4><ul><li>Vue</li></ul><h4>权限</h4><ul><li>接口权限 通过请求携带token</li><li>按钮权限 <ul><li>按钮权限用v-if判断</li><li>配置路由信息 通过自定义指令进行按钮权限的判断</li></ul></li><li>菜单权限 <ul><li>菜单与路由分离，菜单由后端返回</li><li>菜单和路由都由后端返回</li></ul></li><li>路由权限 <ul><li>初始路由上标记相应的权限信息，每次路由跳转前做校验</li><li>初始路由只有白名单路由，登陆后根据访问权限使用addRoutes添加路由</li><li>后端返回路由</li></ul></li></ul><h4>微前端</h4><ul> 基座 <li>为子应用 提供展示dom</li><li>提供基础路由地址</li> 子应用 <li>配置跨域</li><li>配置 基础路由地址 拦截本地路由 使用基座路由</li></ul>",12)];const u={};var n=(0,e(3744).Z)(u,[["render",function(l,i){return(0,o.wg)(),(0,o.iD)("section",null,r)}]])}}]);