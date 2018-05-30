import React from 'react';
import cn from 'classnames';

import './tableHeader.css';

interface Props {
    dark?: boolean;
};

export default function TableHeader(props: Props) {
    const { className, children, dark, ...rest } = props;
    return (
        <thead>
            <tr {...rest} className={cn(className, 'table-header', { dark })}>
                {React.Children.map(children, (child, index) => {
                    if (child.type === 'th') {
                        return child;
                    } else {
                        return <th key={index}>{child}</th>
                    }
                })}
            </tr>
        </thead>
    );
}