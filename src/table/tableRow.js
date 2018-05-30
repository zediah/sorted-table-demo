import React from 'react';
import cn from 'classnames';

import './tableRow.css'

interface Props {
    dark?: boolean;
};

export default function TableRow(props: Props) {
    const { className, children, dark, ...rest } = props;
    return (
        <tr {...rest} className={cn(className, 'table-row', { dark })}>
            {React.Children.map(children, (child, index) => {
                if (child.type === 'td') {
                    return child;
                } else {
                    return <td key={index}>{child}</td>
                }
            })}
        </tr>
    );
}