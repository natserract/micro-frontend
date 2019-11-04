import Provider from 'vuejs-redux'
import store from '../redux/index.store'
import Header from './component/header/index.header'

export default {
  render(h) {
    return (
      <Provider mapStateToProps={this.mapStateToProps} store={this.store}>
        <Header />
      </Provider>
    )
  },

  //State
  data: () => ({
    store: store
  }),

  //Your methods here
  methods: {
    mapStateToProps(state) {
      return {
        viewData: state.user
      }
    }
  },

  //Register component
  components: {
    Provider,
    Header,
  }
}
