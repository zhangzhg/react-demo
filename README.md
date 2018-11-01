copy from :

https://github.com/kenberkeley/react-demo.git


了解了一下react reduce 的基本项目结构和数据的传输方式:
                                                       |
     action(doing something business)  <---------------+----------------------   dispatch2prop(create and dispatch action)
                                                       |             connect
                  | action.type        ----------store | container -----------
                                                       |
     reducers(update all state) -----------------------+--------------------->   state2props(update component/view)
     
     
     
     
     
                                                       |
