import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { VerificationComponent } from './components/verification/verification.component';
import { BudgetComponent } from './components/budget/budget.component';
import { GeneralComponent } from './components/general/general.component';
import { ConfigurationListComponent } from './components/configuration-list/configuration-list.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

export const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      {
        path: 'assessment',
        component: AssessmentComponent
      },
      {
        path: 'verification',
        component: VerificationComponent
      },
      {
        path: 'budget',
        component: BudgetComponent
      },
      {
        path: 'configurationslist',
        component: ConfigurationListComponent
      },
      {
        path: 'general',
        component: GeneralComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}