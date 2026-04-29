import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogoDevApi } from '../infrastructure/logo-dev-api';

/**
 * @summary Coordinates language, logo and footer data for shell components.
 * @author Dilsen
 */
@Injectable({ providedIn: 'root' })
export class LayoutFacadeService {
  private readonly translateService = inject(TranslateService);
  private readonly logoDevApi = inject(LogoDevApi);

  public readonly logoUrl = this.logoDevApi.getLogoUrl();
  public readonly developer = this.logoDevApi.getDeveloper();

  public constructor() {
    this.translateService.addLangs(['en', 'es']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  /**
   * @summary Changes active language.
   * @param language New language code.
   */
  public setLanguage(language: 'en' | 'es'): void {
    this.translateService.use(language);
  }
}
