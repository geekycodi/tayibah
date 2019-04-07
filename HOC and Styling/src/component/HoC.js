import React from 'react';
import PropTypes from 'prop-types';

const HoC=(WrappedComponent)=> {


    return class extends React.Component {
        static contextTypes = {
            user: PropTypes.string,
            userStatus:PropTypes.string
        };

        render() {
            return <WrappedComponent {...this.context}/>;
        }
    }
}
export default HoC;