/* this file is required by karma.conf.js and recursively loads all the .spec and framework files */
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
declare const require: any;
/*  initialize the Angular testing environment */
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
/* find all tests */
const context = require.context('./', true, /\.spec\.ts$/);
/* load modules */
context.keys().map(context);
