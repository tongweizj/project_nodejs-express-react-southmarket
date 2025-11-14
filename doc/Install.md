# Install 

## client


## API

### `.env`

```
MONGODB_URI=mongodb://eshopdadmin:eshop123@192.168.2.150:27017/eshop
PORT=3000
```

### 启动服务

start api server
```
npm run dev
pm2 start server.js
```

测试
```
curl 127.0.0.1:3001
```


rount
- http://localhost:3001/api/categories
