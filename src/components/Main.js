import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AddContactPage from '../pages/AddContactPage'
import ContactListPage from '../pages/ContactListPage'
import HomePage from '../pages/HomePage'
import Contact from './Contact'

const Main = () => {
  return (
    <Switch>
      <Route path="/user/:id" component={Contact} />
      <Route path="/add-contacts" component={AddContactPage} />
      <Route path="/contacts-list" component={ContactListPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  )
}

export default Main
