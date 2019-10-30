import * as React from 'react'
import { navigateToUrl } from 'single-spa'

const App = () => {
    return (
        <>
            <a href="/vue" onClick={navigateToUrl} className="brand-logo">single-spa</a>
            <p>Main Content</p>
        </>
    )
}
export default App;