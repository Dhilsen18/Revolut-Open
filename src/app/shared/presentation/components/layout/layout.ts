import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { TransactionListComponent } from '../../../../creditcard/presentation/components/transaction-list/transaction-list';
import { LayoutFacadeService } from '../../../application/layout-facade.service';
import { FooterComponent } from '../footer/footer';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

/**
 * @summary Main shell layout with toolbar, content and footer.
 * @author Dilsen
 */
@Component({
  selector: 'app-layout',
  imports: [
    MatToolbarModule,
    TranslateModule,
    LanguageSwitcherComponent,
    TransactionListComponent,
    FooterComponent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {
  private readonly facade = inject(LayoutFacadeService);
  public readonly logoUrl = this.facade.logoUrl;
}
