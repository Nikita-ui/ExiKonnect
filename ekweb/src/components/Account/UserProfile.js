import React,{Component} from 'react';
import './UserProfile.css';

import Header from '../Home/Header/Header';
import ProfileHeader from '../Home/Header/ProfileHeader';

class UserProfile extends Component {
    
    render(){
        return(
            <>
            <div>
                <Header/>
              <ProfileHeader/>
            </div>
            <div class="container">
                <div class="row">
                 <p>About</p>
                </div>
            </div>
            <div class="container">
                <div class="row">
                 <p>Preferences</p>
                </div>
            </div>
            <div class="container">
                <div class="row">
                 <p>Past Events</p>
               
                </div>
            </div>
            </>
        )
    }
}
export default UserProfile;

