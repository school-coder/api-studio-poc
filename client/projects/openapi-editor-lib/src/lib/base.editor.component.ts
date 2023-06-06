import {AfterViewInit, Component} from '@angular/core';


@Component({
    template: ''
})
export abstract class BaseEditorComponent implements AfterViewInit {

    abstract initMonaco(options: any): void;

    protected _options: any;

    ngAfterViewInit(): void {
        const isMonacoLoaded = typeof ((<any>window).monaco) === 'object';

        if(isMonacoLoaded) {
            this.init();
        } else {
            this.loadAndInit();
        }
    }

    private init() {
        this.initMonaco(this._options);
    }

    private loadAndInit() {
        const onGotAmdLoader: any = () => {
            // Load monaco
            (<any>window).require.config({ paths: { vs: `./assets/monaco/min/vs` } });
            (<any>window).require([`vs/editor/editor.main`], () => {
                this.initMonaco(this._options);
            });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
            const loaderScript: HTMLScriptElement = document.createElement('script');
            loaderScript.type = 'text/javascript';
            loaderScript.src = `./assets/monaco/min/vs/loader.js`;
            loaderScript.addEventListener('load', onGotAmdLoader);
            document.body.appendChild(loaderScript);
        } else {
            onGotAmdLoader();
        }
    }
}
