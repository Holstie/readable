import React from "react";
import PropTypes from 'prop-types'
import Posts from './Posts'

class Category extends React.Component {

    render() {
        return (
            <div>
                    <Posts/>
            </div>
        );
    }
}

export default Category;