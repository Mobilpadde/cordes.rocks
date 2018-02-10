import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import scrollTo from 'scroll-to';

import Person from '../person'
import './style.sass';

import people from '../../people.json';

class Family extends Component {
    componentDidMount() {
        this.scroll(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.scroll(newProps);
    }

    scroll(p) {
        const { whom }  = p.match.params;

        setTimeout(() => {
            scrollTo(0, this.refs[whom].refs[whom].offsetTop);
        }, 250)
    }

    render() {
        const { match } = this.props;

        let { whom } = match.params;
        whom = whom || '';

        return (
            <div>
                <ul className="people">
                    {
                        people.map(p => <Person
                            {...p}
                            ref={p.name}
                            key={p.name}
                            large={ whom.toLowerCase() === p.name.toLowerCase() }
                        />)
                    }
                </ul>
            </div>
        )
    }
}

export default Family;
