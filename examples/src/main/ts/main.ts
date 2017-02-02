import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
let exportRootModule = require("./default/app.module");

console.log(process.env.PROJECT);
switch (process.env.PROJECT)
{
    case 'validation':
        exportRootModule = require("./form/validation/app.module");
        break;
    case 'dynamic-form':
        exportRootModule = require("./form/dynamic-form/app.module");
        break;
    case 'event':
        exportRootModule = require("./input-output/event/app.module");
        break;
    case 'animation':
        exportRootModule = require("./animation/app.module");
        break;
}

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(exportRootModule.AppModule);