/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2021 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import { DataSourceToolbarModule, DataTableModule, CdrModule, EntityModule, BulkPropertyEditorModule } from 'qbm';
import { AttestationDecisionComponent } from './attestation-decision.component';
import { AttestationCaseComponent } from './attestation-case.component';
import { AttestationActionComponent } from '../attestation-action/attestation-action.component';
import { ItshopModule } from 'qer';
import { DecisionHistoryItemComponent } from './decision-history-item/decision-history-item.component';
import { ApproversComponent } from './approvers/approvers.component';
import { EntityPropertyEditorComponent } from '../entity-property-editor/entity-property-editor.component';
import { AttestationDisplayModule } from '../attestation-display/attestation-display.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AttestationSnapshotModule } from '../attestation-snapshot/attestation-snapshot.module';

@NgModule({
  declarations: [
    AttestationCaseComponent,
    AttestationDecisionComponent,
    AttestationActionComponent,
    DecisionHistoryItemComponent,
    ApproversComponent,
    EntityPropertyEditorComponent
  ],
  imports: [
    AttestationSnapshotModule,
    CommonModule,
    CdrModule,
    EntityModule,
    EuiCoreModule,
    EuiMaterialModule,
    ItshopModule,
    TranslateModule,
    DataSourceToolbarModule,
    DataTableModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    BulkPropertyEditorModule,
    AttestationDisplayModule
  ],
  exports:[ 
    DecisionHistoryItemComponent,
    ApproversComponent
  ]
})
export class AttestationDecisionModule { }