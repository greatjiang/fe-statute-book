# Express项目结构及规范

## 目录结构
   project-name/

 ├── config/

 │   └── config.js

 ├── controllers/

 │   ├── authController.js

 │   ├── userController.js

 │   └── ...

 ├── middleware/

 │   ├── authMiddleware.js

 │   ├── errorMiddleware.js

 │   └── ...

 ├── models/

 │   ├── userModel.js

 │   ├── productModel.js

 │   └── ...

 ├── routes/

 │   ├── authRoutes.js

 │   ├── userRoutes.js

 │   └── ...

 ├── utils/

 │   ├── helperFunctions.js

 │   ├── validator.js

 │   └── ...

 ├── app.js

 ├── package.json

 └── README.md

## 目录说明
config/ 目录：包含项目的配置文件，如数据库连接字符串、API密钥、环境变量等。  
controllers/ 目录：包含所有的控制器，每个控制器处理特定的路由请求，例如：authController、userController等。  
middleware/ 目录：包含所有中间件，如身份验证、错误处理、日志记录等。   
models/ 目录：包含所有的模型，每个模型代表一个数据库表，例如：userModel、productModel等。  
routes/ 目录：包含所有的路由，如：authRoutes、userRoutes等。  
utils/ 目录：包含所有辅助功能、共用函数、自定义工具函数等。  

## 规范说明
控制器负责处理HTTP请求，对请求进行解析，调用相关的服务方法进行业务逻辑处理，并返回HTTP响应。  
中间件负责拦截HTTP请求，并进行身份验证、错误处理、请求日志记录等处理。  
模型负责与数据库交互，包含数据操作的方法，如查询、新增、修改、删除等。  
路由负责处理HTTP请求的路由映射和控制器的调用。  
辅助功能负责提供一些共用的辅助函数，如加密解密、数据校验、日志记录等。  
