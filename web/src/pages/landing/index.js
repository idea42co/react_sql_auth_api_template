import React from 'react';
import PrismCode from 'react-prism';
import AuthenticatedPage from '../../components/authenticatedPage';
import AuthManager from '../../managers/authManager';
import './index.css';

class LandingPage extends AuthenticatedPage {

    logOut() {
        AuthManager.getInstance().logOut();
    }

    render() {
        return (
            <div className="landing-root">
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo">ReactJS + AuthAPI with Sequelize</a>
                        <ul id="nav-mobile" class="right">
                            <li><a className="clickable-link" onClick={this.logOut}>Log Out</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <h2>Welcome to ReactJS</h2>
                    <h4>Powered by an Authenticated API with Sequelize</h4>
                    <h5 id='introduction'>Introduction</h5>
                    <p>
                        This is just a simple base page built with ReactJS + Materialize CSS. Should you want to remove this CSS framework, open <span className="pathName">/web/public/index.html</span> and remove the four lines below the comment.
                </p>
                    <PrismCode component="pre" className="language-javascript">
                        {`<!DOCTYPE html>
<html lang="en">
    <head>
        ... 
        <!-- Remove the four lines below to remove prism (used to display code) and Materialize. -->
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.js"></script>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.css" />
        ...
    </head>

    <body>
    ... ReactJS HTML code here ...
    </body>
</html>`}
                    </PrismCode>
                    <h5 id='structure'>Structure of this app &amp; Building the app</h5>
                    <p>
                        The <strong>API</strong> is built with NodeJS and can be accessed by going to <a target="_blank" rel="noopener noreferrer" href='http://localhost:5000/docs'>the swagger docs.</a> However, when you publish this app, you would need to seperate apps. One NodeJS app to run the API, and one simple server to host the produced HTML files from the compiled ReactJS app.
                    </p>
                    <p>
                        The config files in <span className="pathName">/web/src/config</span> are loaded in, controlled by the <span className="pathName">NODE_ENV</span> environment variable. So, make sure have a configuration file for your environment you are running in. Also, be sure that when you build the application, you set the environment variable prior to compiling. This will ensure you have all your settings loaded before react-scripts produces your compiled distributable.
                    </p>
                    <h5 id='structure'>Ready to get started?</h5>
                    <p>
                        Build on this here, or completly scrap the pages, components and/or managers and make your own creation. :-D We are just happy you started here.
                    </p>
                </div>
            </div>
        );
    }
}

export default LandingPage;