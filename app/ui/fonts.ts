import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
//common fonts can be called with fonts as classnames anyware to page- components in route and layout- main route layout
export const lusitana = Lusitana({ 
    weight: ['400','700'],
    subsets: ['latin']});