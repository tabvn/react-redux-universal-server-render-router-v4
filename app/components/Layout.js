import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {renderRoutes} from 'react-router-config';


class Layout extends React.Component {
    constructor(props,) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        alert(this.props.page.title);
    }

    render() {

        const {state, page, route} = this.props;

        return (
            <html>
            <head>
                <title>{page.title}</title>
                <meta name='description' content={page.description}/>
                <link rel='stylesheet' href='/style.css'/>
            </head>
            <body>
            <h1>{page.title}</h1>
            <p>Isn't server-side rendering remarkable?</p>
            <button onClick={this._handleClick}>Click Me</button>
            {renderRoutes(route.routes)}
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(state).replace(/</g, '\\x3c')
            }}/>
            <script src='/bundle.js'/>
            </body>
            </html>
        );
    }
}

Layout.propTypes = {
    page: PropTypes.object.isRequired
};


const wrapper = connect(
    (state) => {
        return {state: state, page: state.page, user: state.user, children: state.children};
    }
);

export default wrapper(Layout);
