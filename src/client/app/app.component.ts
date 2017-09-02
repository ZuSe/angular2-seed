import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { Angulartics2Mixpanel } from 'angulartics2';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(angulartics2Mixpanel: Angulartics2Mixpanel) {
    console.log('Environment config', Config, angulartics2Mixpanel);
  }
}
