import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        < div className='d-flex justify-content-center'>
            <div className='w-25 bg-primary text-white ms-4 mt-4 mb-4'>
                < h1 className=' p-4 fs-4'> Difference between authorization and authentication?</h1>
                <p className=' fs-4 ps-2'>In authentication process, the identity of users are checked for providing the access to the system.	It is done before the authorization process.<br></br>

                    While in authorization process, person’s or user’s authorities are checked for accessing the resources.  this process is done after the authentication process.	</p>
            </div>
            <div className='w-25 bg-primary text-white ms-4 mt-4 mb-4'>
                < h1 className=' p-4 fs-4'> Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className=' fs-4 ps-2'>Google Firebase offers many features that helps us go-to backend development tool for web<br></br>

                    1 .Cookie-Based authentication
                    2.Token-Based authentication
                    3.Third party access(OAuth, API-token)
                    4.OpenId
                    SAML	</p>
            </div>
            <div className='w-25 bg-primary text-white ms-4 mt-4 mb-4'>
                < h1 className=' p-4 fs-4'> What other services does firebase provide other than authentication</h1>
                <p className=' fs-4 ps-2'>1.Cloud Firestore
                    2.Cloud Functions
                    3.Authentication
                    4.Hosting
                    5.Cloud Storage
                    6.Google Analytics
                    7.Predictions
                    8.Cloud Messaging
                    9.Dynamic Links
                    10.Remote Config	</p>
            </div>

        </div>
    );
};

export default Blogs;