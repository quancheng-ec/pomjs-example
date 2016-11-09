FROM yingjunjiao/runtime-image


ADD node_modules /root/node_modules
ADD bundle /root/bundle
ADD config /root/config
ADD dist /root/dist
ADD layouts /root/layouts
ADD src /root/src
ADD static /root/static
ADD .babelrc /root/.babelrc
ADD package.json /root/package.json
ADD vue_build.json /root/vue_build.json



## 健康检查
#HEALTHCHECK --interval=10s --timeout=1s --retries=3 CMD curl -f http://localhost ||  exit 1
WORKDIR /root


CMD npm run build && npm run server








