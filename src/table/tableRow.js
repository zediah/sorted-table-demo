import React from 'react';
import cn from 'classnames';

import './tableRow.css'

interface Props {

};

export default function TableRow(props: Props) {
    const { className, children } = props;
    return (
        <tr {...props} className={cn(className, 'table-row')}>
            {React.Children.map(children, (child, index) => {
                return <td key={index}>{child}</td>
            })}
        </tr>
    );
}