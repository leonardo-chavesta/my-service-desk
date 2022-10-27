import { lazy } from 'react';


export const privateRoutes = [

    {
        path: '/Usuario',
		element: lazy(() => import('../../views/Detalle/detalle')),
    }


]