import React from 'react';
import ProgressBar from 'react-progress-bar-plus';

import 'react-progress-bar-plus/lib/progress-bar.css';
import '../main.css';
import Login from './Login'
import { login } from '../../api/api.js';
import AdminMenu from "./AdminMenu";
import RemoteStoreAlternative from './AdminProductTableControl'
class MainAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLodaing:false,
                isLogged:false,
                    token: ""
        };

    this.handleLoginSubmit =  this.handleLoginSubmit.bind(this);

}

handleLoginSubmit(e,email,pass)
{
    e.preventDefault();
    login(email,pass).then(response =>{
        if(response.data.isLogged && response.data.access_token !== undefined) {
            localStorage.setItem('access_token', response.data.access_token);
            this.setState({
                token: response.data.access_token,
                isLogged: true,
            });


        }
        else {
            toastr.error('The user or the password are incorrect!.', 'Login')
        }
    });
}

handleSearch(e) {
    e.preventDefault;
    if (e.charCode == 13 && e.target.value.length > 0) {
        let encodeUri = encodeURIComponent(e.target.value);
        this.props.router.push('/?q=' + encodeUri);
        e.target.value = '';
    } else {
        e.target.focus();
    }
}

scrolltoTop(scrollDuration) {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / ( scrollDuration / 15 );
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
            scrollCount = scrollCount + 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, ( scrollHeight - scrollMargin ));
        }
        else clearInterval(scrollInterval);
    }, 15);
}

render() {

    let token = localStorage.getItem("access_token");
    let isLogged = this.state.isLogged;
    if (isLogged === false && token === null) {
            return <Login onClick={this.handleLoginSubmit.bind(this)}/>
        }else if(isLogged || token !== null )
            {
            return (
                <div>
                    <ProgressBar percent={100} />
                    <AdminMenu/>
                    <div className='main-wrapper'>
                      <RemoteStoreAlternative/>
                    </div>
                </div>
            );
        }
    }
}

export default MainAdmin;
