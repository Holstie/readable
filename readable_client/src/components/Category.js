import React from "react";
import PropTypes from 'prop-types'
import Posts from './Posts'

class Category extends React.Component {
    static propTypes = {
        category: PropTypes.object.isRequired
    }
    render() {
        const name = this.props.category.name;
        return (
            <div>
                <h2>Category: {name}</h2>
                <div>
                    <Posts
                        category={this.props.category}>
                    </Posts>
                </div>

            </div>
        );
    }
}

export default Category