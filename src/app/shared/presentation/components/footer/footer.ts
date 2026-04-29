import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutFacadeService } from '../../../application/layout-facade.service';

/**
 * @summary Footer with copyright and developer information.
 * @author Dilsen
 */
@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  private readonly facade = inject(LayoutFacadeService);
  public readonly developer = this.facade.developer;
}
