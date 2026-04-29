import { Component } from '@angular/core';
import { LayoutComponent } from './shared/presentation/components/layout/layout';

/**
 * @summary Root component that bootstraps the layout shell.
 * @author Dilsen
 */
@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
