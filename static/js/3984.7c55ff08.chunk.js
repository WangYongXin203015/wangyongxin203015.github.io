"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[3984],{3984:function(n,r,e){e.r(r),e.d(r,{default:function(){return d}});var l=e(66252),t=(0,l._)("h4",null,"Nginx 简述",-1),i=(0,l._)("ul",null,[(0,l._)("li",null,"Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，")],-1),o=(0,l._)("h4",null,"Nginx history模式映射",-1),u=[(0,l.Uk)(""),(0,l._)("code",null,"\r\n    location / {\r\n        root   html;\r\n        index  index.html;\r\n        try_files $uri $uri/ /index.html;\r\n    }\r\n",-1),(0,l.Uk)("\r\n")],h=(0,l._)("h4",null,"Nginx history 反向代理",-1),s=[(0,l.Uk)(""),(0,l._)("code",null,"\r\n    server{\r\n        listen       88;\r\n        server_name  localhost; //用户访问的地址\r\n        location  / {\r\n            index  index.html;\r\n        }\r\n        location /proxy/api { #前端访问的api包含\r\n            proxy_pass http://proxy_url   #实际访问地址\r\n            index  index.html;\r\n        }\r\n    }\r\n",-1),(0,l.Uk)("\r\n")],a=(0,l._)("h4",null,"Nginx history 负载均衡",-1),c=[(0,l.Uk)(""),(0,l._)("code",null,"\r\n    http节点下\r\n    upstream testServer { //服务器集群  \r\n        server localhost:8087 weight=10; //轮询服务器  weight 权重\r\n        server localhost:8088 weight=2; //轮询服务器\r\n        server localhost:8089; //轮询服务器\r\n    }\r\n    server节点下\r\n    location / {\r\n        root   html;\r\n        index  index.html index.htm;\r\n        proxy_pass http://testServer; // testServer 为自己定义的服务器集群\r\n    }\r\n",-1),(0,l.Uk)("\r\n")],x=(0,l._)("h4",null,"http 模块",-1);const p={};var d=(0,e(83744).Z)(p,[["render",function(n,r){var e=(0,l.Q2)("code");return(0,l.wg)(),(0,l.iD)("section",null,[t,i,o,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,u)),[[e]]),h,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,s)),[[e]]),a,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,c)),[[e]]),x])}]])}}]);