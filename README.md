copy from :

https://github.com/kenberkeley/react-demo.git

                                                       |
     action(doing something business)  <---------------+----------------------   dispatch2prop(create and dispatch action)
                                                       |             connect
                  | action.type        ----------store | container -----------
                                                       |
     reducers(update all state) -----------------------+--------------------->   state2props(update component/view)
                                                       |
