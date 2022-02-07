import { render } from 'react-dom'
import App from '/src/components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Expenses from '/src/routes/expenses'
import Invoices from '/src/routes/invoices'

const rootElement = document.getElementById('app')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
)

// function startWeb() {
//   ReactDOM.render(<App />, document.getElementById('app'))
// }

// if (window.cordova) {
//   document.addEventListener(
//     'deviceready',
//     () => {
//       codePush.sync()
//       startWeb()
//     },
//     false,
//   )

//   document.addEventListener(
//     'resume',
//     () => {
//       codePush.sync()
//     },
//     false,
//   )
// } else {
//   startWeb()
// }
