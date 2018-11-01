#copy from :

> https://github.com/kenberkeley/react-demo.git


#了解了一下react reduce 的基本项目结构和数据的传输方式:
```
                                                       |
     action(doing something business)  <---------------+----------------------   dispatch2prop(create and dispatch action)
                                                       |             connect
                  | action.type        ----------store | container -----------
                                                       |
     reducers(update all state) -----------------------+--------------------->   state2props(update component/view)
     
```
    
-------------------------------------------------------------------------------------------------------------------------------------

# UI组件

+只负责 UI 的呈现，不带有任何业务逻辑
+没有状态（即不使用this.state这个变量）
+所有数据都由参数（this.props）提供
+不使用任何 Redux 的 API

# 容器组件

+负责管理数据和业务逻辑，不负责 UI 的呈现
+带有内部状态
+使用 Redux 的 API

# UI和容易组件之间的连接

+connect()

# mapStateToProps

+ state -> store -> mapStateToProps -> ui view

# mapDispatchToProps
+ui->action->state->store

     
                                                       |
