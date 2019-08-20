import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssessmentComponent } from './components/assessment-config/assessment/assessment.component';
import { VerificationComponent } from './components/verification-config/verification/verification.component';
import { BudgetComponent } from './components/budget/budget.component';
import { GeneralComponent } from './components/general/general.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { AssessmentListComponent } from './components/assessment-config/assessment-list/assessment-list.component';
import { VerificationListComponent } from './components/verification-config/verification-list/verification-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      {
        path: '',
        redirectTo: 'general'
      },
      {
        path: 'assessment',
        component: AssessmentListComponent
      },
      {
        path: 'assessment_configurations',
        component: AssessmentComponent
      },
      {
        path: 'verification',
        component: VerificationListComponent
      },
      {
        path: 'verification_configurations',
        component: VerificationComponent
      },
      {
        path: 'budget',
        component: BudgetComponent
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
