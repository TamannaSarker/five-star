import React from 'react'
import { BrowserRouter as Router,
    Route,} from "react-router-dom";
import AddToCard from '../AddToCard/AddToCard';
import API from '../API/API';
import CardList from '../CardList/CardList';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Form from '../Form/Form';
import LogIn from '../LogIn/LogIn';
import Menu from '../Menu/Menu';
import MyBooking from '../MyBooking/MyBooking';
import Register from '../Register/Register';
import ResetPassword from '../ResetPassword/ResetPassword';
import UploadFile from '../UploadFile/UploadFile';

function AppRoute() {
    return (
        <div>
            <Router>
             <Menu />
             <Route path="/" component={CardList} />
             <Route path="/card" exact component={CardList}  />
             <Route path="/form" component={Form}   />
             <Route path="/login" component={LogIn}   />
             <Route path="/register" component={Register}   />
             <Route path="/addProduct" component={AddToCard}   />
             <Route path="/resetPassword" component={ResetPassword}   />
             <Route path="/forgotPassword" component={ForgotPassword}   />
             <Route path="/file" component={UploadFile}   />
             <Route path="/myBooking" component={MyBooking}   />
             <Route path="/api" component={API}   />
             </Router>
        </div>
    )
}

export default AppRoute
