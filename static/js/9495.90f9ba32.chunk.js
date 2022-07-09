"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[9495],{29495:function(l,i,e){e.r(i),e.d(i,{default:function(){return d}});var o=e(66252),t=[(0,o.uE)("<h4>Web Worker</h4><ul> 调用Worker() 的构造器，指定一个脚本的 URI 来执行 worker 线程 <li>创建Worker对象 cosnt worker = new Worker(&#39;worker.js&#39;)</li><li>worker.postMessage() 传递信息</li><li>worker.onmessage 事件处理信息</li><li>协程 使用postMessage发送信息，onmessage 接受信息</li><li>大的对象 非响应数据 性能优化</li></ul><h4>WebSocket</h4><ul><li>cosnt webSocket=new WebSocket(url)</li><li>onmessage 收到信息的回调</li><li>onclse 关闭连接的回调</li><li>onerror 连接失败的回调</li><li>onopen 连接成功的回调</li><li>send 发送消息</li><li>close 关闭连接</li></ul><h4>EventSource</h4><ul><li>http持久化连接，服务器推送的网络事件接口</li><li>const eventSource = new EventSource(url)</li><li>onmessage ,onopen,onerror</li><li>close 关闭连接</li><li>不能请求发送消息</li></ul><h4>Diff算法</h4><ul><li>Vue2 <ul><li>set 触发Dep.notify 通知Watcher Watcher会调用patch方法给DOM 打补丁</li><li>patch 阶段 函数前两位参数 oldVnode 和Vnode </li><ul><li>没有Vnode destory oldVnode</li><li>没有oldVnode createVnode</li><li>不一样 destory oldVnode ，createVnode</li><li>一样 调用patchVnode进行比较</li></ul><li>patchVnode 阶段</li><ul><li>新节点是否是文本节点，如果是，则直接更新dom的文本内容为新节点的文本内容</li><li>新节点和旧节点如果都有子节点，则处理比较更新子节点</li><li>只有新节点有子节点，旧节点没有，新节点createVnode</li><li>只有旧节点有子节点而新节点没有，destory oldVnode子节点</li><li>完全不一致 调用updateChildren</li></ul><li>updateChildren阶段 真正处理的阶段</li><ul><li>双指针遍历 头头 尾尾 头尾 尾头 比较 </li><li>当新老 VNode 节点的 start 相同时，直接 patchVnode ，同时新老 VNode 节点的开始索引都加 1</li><li>当新老 VNode 节点的 end相同时，同样直接 patchVnode ，同时新老 VNode 节点的结束索引都减 1</li><li>当老 VNode 节点的 start 和新 VNode 节点的 end 相同时，这时候在 patchVnode 后，还需要将当前真实 dom 节点移动到 oldEndVnode 的后面，同时老 VNode 节点开始索引加 1，新 VNode 节点的结束索引减 1</li><li>当老 VNode 节点的 end 和新 VNode 节点的 start 相同时，这时候在 patchVnode 后，还需要将当前真实 dom 节点移动到 oldStartVnode 的前面，同时老 VNode 节点结束索引减 1，新 VNode 节点的开始索引加 1</li><li>其他情况没有复用节点</li><ul><li>找key值相同的节点 进行patchVnode，并移动</li><li>调用 createElm 创建一个新的 dom 节点放到当前 newStartIdx 的位置</li></ul></ul></ul></li><li>Vue3 <ul><li>PatchFlag 标记静态Vnode节点</li><li>PatchFlag &gt; 0 直接复用</li><li>PatchFlag &lt; 0 是需要被 full diff，</li><li>头部指针移动 使用isSameVNodeType判断是否为相同节点，获取最长相同子序列</li><li>尾部指针移动 获取最长递增子序列</li><li>相同子序列可以直接复用</li><li>移动 获取最长递增子序列 移动非递增序列内的元素 保证移动次数最少</li><li>新增 旧Dom 使用完 新Dom直接添加</li><li>删除 旧Dom 有剩余 就将剩余的Dom删除掉 </li></ul></li><li>React <ul><li>tree diff：在两个树对比时，只会比较同一层级的节点，会忽略掉跨层级的操作 <ul><li>只进行同级比较</li><li>节点移动操作同级节点移动，节点跨级会删除旧节点，创建新节点</li></ul></li><li>component diff：在对比两个组件时，首先会判断它们两个的类型是否相同，如果不同则不会进一步向下比较，会直接销毁组件，创建新的组件插入。 <ul><li>同一类型的组件，按照原策略继续比较 virtual DOM tree。</li><li>如果不是，从而替换整个组件下的所有子节点。</li><li>shouldComponentUpdate 可以控制是否对节点进行diff算法，提高性能</li></ul></li><li>element diff：对于同一层级的一组节点，会使用具有唯一性的key来区分是否需要创建，删除，或者是移动。 <ul><li>INSERT_MARKUP，旧节点没有，创造新节点</li><li>MOVE_EXISTING，有可复用节点</li><li>REMOVE_NODE，多余的节点</li></ul></li></ul></li><li> key的作用 <ul><li>绑定index index是动态的，前面的节点更改，复用时通过index比较，后面的节点进行diff算法时比较的对象不是真正的原节点</li><li>绑定其他值的时候，diff算法对比更加准确</li></ul> 减少dom操作 <ul><li>通过css样式控制减少dom操作</li></ul></li></ul><h4>权限</h4><ul><li>接口权限 通过请求携带token</li><li>按钮权限 <ul><li>按钮权限用v-if判断</li><li>配置路由信息 通过自定义指令进行按钮权限的判断</li></ul></li><li>菜单权限 <ul><li>菜单与路由分离，菜单由后端返回</li><li>菜单和路由都由后端返回</li></ul></li><li>路由权限 <ul><li>初始路由上标记相应的权限信息，每次路由跳转前做校验</li><li>初始路由只有白名单路由，登陆后根据访问权限使用addRoutes添加路由</li><li>后端返回路由</li></ul></li></ul><h4>微前端</h4><ul> 基座 <li>为子应用 提供展示dom</li><li>提供基础路由地址</li> 子应用 <li>配置跨域</li><li>配置 基础路由地址 拦截本地路由 使用基座路由</li></ul><h4>message event通信</h4><ul><li>发送端 获取打开窗口的引用 let target = window.open(&quot;url&quot;)</li><li>target.postMessage(message,targetOrigin)</li><li>targetOrigin 指定可以接受的url &quot;*&quot;表示无限制</li><li>接收方window.addEventListener(&quot;message&quot;,function(event){})</li><li>opener 使用window.onmessage 接受消息</li><li>target 使用 window.opener.postMessage 发送消息</li></ul>",14)];const n={};var d=(0,e(83744).Z)(n,[["render",function(l,i){return(0,o.wg)(),(0,o.iD)("section",null,t)}]])}}]);