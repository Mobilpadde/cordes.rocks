import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './style.sass';

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pic: '',
        };
    }

    componentWillMount() {
        const { id } = this.props;

        fetch(`https://graph.facebook.com/${id}/picture?width=1920`)
            .then(src => this.setState({pic: src.url}));
    }

    render() {
        const { name, bram, large } = this.props;
        const { pic } = this.state;

        return (
            <li
                ref={name}
                className={classnames({ large })}
                style={{ backgroundImage: `url(${pic})` }}
            >
                <Link to={`/${name}`} replace>
                    <h1 className={classnames({ bram })}>{name}</h1>
                </Link>
            </li>
        );
    }
}

export default Person;
