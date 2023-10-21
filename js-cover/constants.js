/*
 Modül yapısı programlamada kodun bölümlenmesini 
 ve yönetim,inin kolyalaşmısnı sağlar.
 Programı dah aorganize hale getirir ve kodun
 yeniden kullanılabilriğini arttır
 ! export (dışa aktarma)
 * farklı dosyaların bu export edilen elamana erişimi sağlar
*/

// bir soaydan expor edeilen bütün elemanlara erişme
import * as ages from './main.js';

export const leaderTable = [
  {
    id: '1asdk123',
    name: 'Ali',
    point: 8090,
    isActive: true,
  },
  {
    id: '2asdk456',
    name: 'Emma',
    point: 7500,
    isActive: true,
  },
  {
    id: '3asdk789',
    name: 'John',
    point: 9200,
    isActive: true,
  },
  {
    id: '4asdk012',
    name: 'Linda',
    point: 6000,
    isActive: false,
  },
  {
    id: '5asdk345',
    name: 'Michael',
    point: 8600,
    isActive: true,
  },
  {
    id: '6asdk678',
    name: 'Sophia',
    point: 7200,
    isActive: false,
  },
  {
    id: '7asdk901',
    name: 'David',
    point: 6800,
    isActive: true,
  },
  {
    id: '8asdk234',
    name: 'Olivia',
    point: 9500,
    isActive: true,
  },
  {
    id: '9asdk567',
    name: 'William',
    point: 8300,
    isActive: true,
  },
  {
    id: '10asdk890',
    name: 'Mia',
    point: 7700,
    isActive: false,
  },
];

// varsayılan olarak dışa aktarılan eleman
// her dosyada sadece 1 varsayılan dışa aktarım hakkımız var
const adminPass = 'sdajdkı123';
export default adminPass;
