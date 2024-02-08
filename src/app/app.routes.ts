import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'map', 
		loadComponent: () => import('./maps/layout/maps-layout/maps-layout.component'),
		
		children: [
			{
				path: 'view',
				title: 'Puntos de Compra',
				loadComponent: () => import('./maps/pages/maps-page/maps-page.component'),
			},
			{
				path: '', redirectTo: '/map/view', pathMatch: 'full'
			}
		]
	  },
	  {
		path: '',
		redirectTo: '/map/view',
		pathMatch: 'full'
	  }
];
