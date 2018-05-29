import React, { Fragment } from 'react';
import cn from 'classnames';
import TableHeader from './tableHeader';
import { partition } from '../utils/arrayUtil';

import './table.css';

interface State {}
interface Props {}

class Table extends React.Component<Props, State> {
    state: State = {};

    render() {
        const { children, className, ...rest } = this.props;
        const [heading, content] = partition(React.Children.toArray(children), child => child.type === TableHeader);
        return (
            <table {...rest} className={cn(className, 'table')}>
                {heading.length > 0 && heading[0]} 
                <tbody>
                    {content}
                </tbody>
            </table>
        );
    }
}

export default Table;