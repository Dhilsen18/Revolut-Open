import { Injectable } from '@angular/core';
import { DeveloperEntity } from '../domain/developer.entity';

/**
 * @summary Provides static branding and developer metadata.
 * @author Dilsen
 */
@Injectable({ providedIn: 'root' })
export class LogoDevApi {
  /**
   * @summary Returns the toolbar logo URL.
   */
  public getLogoUrl(): string {
    return 'https://cdn.worldvectorlogo.com/logos/revolut.svg';
  }

  /**
   * @summary Returns the developer profile to display in footer.
   */
  public getDeveloper(): DeveloperEntity {
    return {
      code: 'u202319440',
      firstName: 'Dhilsen',
      lastName: 'Mallqui',
    };
  }
}
