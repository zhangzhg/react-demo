import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
    path: 'haircut',

    /* 布局基页 */
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('VIEW/haircut').default)
        }, 'haircutView')
    },

    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                // 注入 Reducer
                injectReducer('todos', require('REDUCER/haircut').default)

                /* 组件连接 state */
                const TodoContainer = createContainer(
                    ({ todos }) => ({ todos }),        // mapStateToProps,
                    require('ACTION/haircut').default,    // mapActionCreators,
                    require('COMPONENT/Haircut/').default // 木偶组件
                )

                cb(null, TodoContainer)
            }, 'haircut')
        }
    }
}
