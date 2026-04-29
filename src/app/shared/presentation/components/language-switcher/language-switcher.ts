import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LayoutFacadeService } from '../../../application/layout-facade.service';

/**
 * @summary Toggle EN|ES language switcher.
 * @author Dilsen
 */
@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcherComponent {
  private readonly facade = inject(LayoutFacadeService);

  public onLanguageChange(language: 'en' | 'es'): void {
    this.facade.setLanguage(language);
  }
}
