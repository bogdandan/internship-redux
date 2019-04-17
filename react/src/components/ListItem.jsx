import React from 'react';

export default function ListItem({item, onItemClick}) {
    return (
        <div style={{cursor: 'pointer'}} onClick={() => onItemClick(item)}>
            {item.text}
        </div>
    )
};

