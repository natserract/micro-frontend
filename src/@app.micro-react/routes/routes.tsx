
import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../component/content/index.content'
import Detail from '../component/detail/index.detail'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/detail" component={Detail} />
        </Switch>
    </Router>
)


export default Routes