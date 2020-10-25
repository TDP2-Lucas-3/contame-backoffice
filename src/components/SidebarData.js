import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as FiIcons from 'react-icons/fi';


export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Usuarios',
    path: '/users',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text',
  },
  {
    title: 'Incidencias',
    path: '/incidents',
    icon: <MdIcons.MdReport />,
    cName: 'nav-text',
  },
];
