# PT-Plugin-Plus
添加签到功能:
index.html末尾增加<script src=/js/rank.js></script><link href='css/fullcalendar.css' rel='stylesheet'/><script src='js/fullcalendar.js'></script><script src='js/fullcalendar.zh-cn.js'></script>
css文件夹下添加fullcalendar.css
js文件夹下添加 rank.js,fullcalendar.js,fullcalendar.zh-cn.js


添加新站点:
需要在 resource/systemConfig.json中添加,以及在 resource/sites添加文件夹以及文件夹下的config.json
如果新站点需要签到功能,需要在 js/rank.js 的 getCheckInConfig函数中添加
