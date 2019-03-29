import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
<div className=" loginPage">
<div class="card text-center mx-auto w-35 h-30">
  <div class="card-header bg-warning">
    Manage Your Expenses Easily!
  </div>
  <div class="card-body bg-dark">
  <br/>
    <h2 class="card-title text-white">Login To Manage Your Expenses</h2>
    <br/><br/>
    <button className="btn btn-warning btn-lg btn-block bigbutton" onClick={startLogin}>Login</button>
  </div>
  </div>
</div>


);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);