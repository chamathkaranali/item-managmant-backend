import { Routes } from '@angular/router';
import { Additem } from './page/additem/additem';
import { GetItem } from './page/get-item/get-item';

export const routes: Routes = [
    {
        path:'addItem',
        component:Additem
    },
    {
        path:'get',
        component:GetItem
    }
];
