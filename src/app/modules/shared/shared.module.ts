import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module'

// TODO: Componentes
import { ComponentsModule } from './components/components.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ComponentsModule],
})
export class SharedModule {}
