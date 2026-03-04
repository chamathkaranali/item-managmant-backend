import { Routes } from '@angular/router';
import { Add } from './page/add/add';
import { Search } from './page/search/search';
import { Update } from './page/update/update';
import { Header } from './page/header/header';

export const routes: Routes = [
    {
        path:'add',
        component:Add
    },
    {
        path:'search',
        component:Search
    },
    {
        path:'update',
        component:Update
    },
    {
        path:'header',
        component:Header
    }
];