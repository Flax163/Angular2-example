import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
let exportRootModule = require("./default/app.module");

switch (process.env.PROJECT)
{
    case 'validation':
        exportRootModule = require("./validation/app.module");
        break;
}

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(exportRootModule.AppModule);