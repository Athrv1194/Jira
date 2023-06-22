import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';

export const SidebarData = [    
    
    {
        title: ' ',
        icon: <DonutSmallIcon />,
        link: '/donutsmall'
    },

    {
        title: 'Search',
        icon: <SearchIcon />,
        link: '/search'
    },

    {
        title: 'Add',
        icon: <AddIcon />,
        link: '/add'
    }
    

]