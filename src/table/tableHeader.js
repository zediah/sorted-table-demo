import React from 'react';
import cn from 'classnames';

import './tableHeader.css';

interface Props {
    centered?: boolean;
};

export default function TableHeader(props: Props) {
    const { className, children } = props;
    return (
        <thead>
            <tr {...props} className={cn(className, 'table-header')}>
                {React.Children.map(children, (child, index) => {
                    return <th key={index}>{child}</th>
                })}
            </tr>
        </thead>
    );
}