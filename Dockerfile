FROM quancheng/runtime-image:1.1

ADD /config /root/config
ADD /layouts /root/layouts
ADD /src /root/src
ADD /static /root/static
ADD /service-all /root/service-all

ADD fetch_service.sh /root
ADD .babelrc /root
ADD package.json /root


WORKDIR /root
RUN cnpm install && rm -rf /root/.npm*
RUN npm run build

ADD start.sh /root

CMD ["./start.sh"]

