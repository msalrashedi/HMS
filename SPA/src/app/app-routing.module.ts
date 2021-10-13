import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertyListComponent } from './property/property-list/property-list.component';



const routes: Routes = [
  {path:'',
   component:PropertyListComponent
  },
  {path:'add-property',
   component:AddPropertyComponent
  },
  {path:'property-details',
   component:PropertyDetailsComponent
  }
  ,
  {path:'**',
  component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
