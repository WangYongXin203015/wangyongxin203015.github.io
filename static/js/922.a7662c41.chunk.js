"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[922],{6922:function(l,i,e){e.r(i),e.d(i,{default:function(){return t}});var o=e(6252),d=[(0,o.uE)("<h4>Web Worker</h4><ul> 调用Worker() 的构造器，指定一个脚本的 URI 来执行 worker 线程 <li>创建Worker对象 cosnt worker = new Worker(&#39;worker.js&#39;)</li><li>worker.postMessage() 传递信息</li><li>worker.onmessage 事件处理信息</li><li>协程 使用postMessage发送信息，onmessage 接受信息</li><li>大的对象 非响应数据 性能优化</li></ul><h4>WebSocket</h4><ul><li>cosnt webSocket=new WebSocket(url)</li><li>onmessage 收到信息的回调</li><li>onclse 关闭连接的回调</li><li>onerror 连接失败的回调</li><li>onopen 连接成功的回调</li><li>send 发送消息</li><li>close 关闭连接</li></ul><h4>EventSource</h4><ul><li>http持久化连接，服务器推送的网络事件接口</li><li>const eventSource = new EventSource(url)</li><li>onmessage ,onopen,onerror</li><li>close 关闭连接</li><li>不能请求发送消息</li></ul><h4>Diff算法</h4><ul><li>Vue2 <ul><li>set 触发Dep.notify 通知Watcher Watcher会调用patch方法给DOM 打补丁</li><li>patch 阶段 函数前两位参数 oldVnode 和Vnode </li><ul><li>没有Vnode destory oldVnode</li><li>没有oldVnode createVnode</li><li>不一样 destory oldVnode ，createVnode</li><li>一样 调用patchVnode进行比较</li></ul><li>patchVnode 阶段</li><ul><li>新节点是否是文本节点，如果是，则直接更新dom的文本内容为新节点的文本内容</li><li>新节点和旧节点如果都有子节点，则处理比较更新子节点</li><li>只有新节点有子节点，旧节点没有，新节点createVnode</li><li>只有旧节点有子节点而新节点没有，destory oldVnode子节点</li><li>完全不一致 调用updateChildren</li></ul><li>updateChildren阶段 真正处理的阶段</li><ul><li>双指针遍历</li><li>当新老 VNode 节点的 start 相同时，直接 patchVnode ，同时新老 VNode 节点的开始索引都加 1</li><li>当新老 VNode 节点的 end相同时，同样直接 patchVnode ，同时新老 VNode 节点的结束索引都减 1</li><li>当老 VNode 节点的 start 和新 VNode 节点的 end 相同时，这时候在 patchVnode 后，还需要将当前真实 dom 节点移动到 oldEndVnode 的后面，同时老 VNode 节点开始索引加 1，新 VNode 节点的结束索引减 1</li><li>当老 VNode 节点的 end 和新 VNode 节点的 start 相同时，这时候在 patchVnode 后，还需要将当前真实 dom 节点移动到 oldStartVnode 的前面，同时老 VNode 节点结束索引减 1，新 VNode 节点的开始索引加 1</li><li>其他情况没有复用节点</li><ul><li>找key值相同的比较</li><li>调用 createElm 创建一个新的 dom 节点放到当前 newStartIdx 的位置</li></ul></ul></ul></li><li>Vue3 <ul><li>PatchFlag 标记静态Vnode节点</li><li>PatchFlag &gt; 0 直接复用</li><li>PatchFlag &lt; 0 是需要被 full diff，</li><li>头部指针移动 使用isSameVNodeType判断是否为相同节点，获取最长相同子序列</li><li>尾部指针移动 获取最长相同子序列 </li><li>相同子序列可以直接复用</li><li>删除</li><li>新增</li><li>移动</li></ul></li></ul><h4>权限</h4><ul><li>接口权限 通过请求携带token</li><li>按钮权限 <ul><li>按钮权限用v-if判断</li><li>配置路由信息 通过自定义指令进行按钮权限的判断</li></ul></li><li>菜单权限 <ul><li>菜单与路由分离，菜单由后端返回</li><li>菜单和路由都由后端返回</li></ul></li><li>路由权限 <ul><li>初始路由上标记相应的权限信息，每次路由跳转前做校验</li><li>初始路由只有白名单路由，登陆后根据访问权限使用addRoutes添加路由</li><li>后端返回路由</li></ul></li></ul><h4>微前端</h4><ul> 基座 <li>为子应用 提供展示dom</li><li>提供基础路由地址</li> 子应用 <li>配置跨域</li><li>配置 基础路由地址 拦截本地路由 使用基座路由</li></ul>",12)];const n={};var t=(0,e(3744).Z)(n,[["render",function(l,i){return(0,o.wg)(),(0,o.iD)("section",null,d)}]])}}]);