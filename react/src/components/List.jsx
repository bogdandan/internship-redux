import React from 'react';
import Proptypes from 'prop-types';
import ListItem from './ListItem';

export default function List({items, onItemClick}) {
    return (
        <>
            {items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    onItemClick={onItemClick}
                />
            ))}
        </>
    )
};

List.propTypes = {
    items: Proptypes.array.isRequired,
};

