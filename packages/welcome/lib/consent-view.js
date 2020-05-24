'use babel';
/** @jsx etch.dom */

import etch from 'etch';

export default class ConsentView {
    constructor() {
        etch.initialize(this);
    }

    render() {

    }

    update() {
        return etch.update(this);
    }

    consent() {
        atom.config.set('core.telemetryConsent', 'limited');
        atom.workspace.closeActivePaneItemOrEmptyPaneOrWindow();
    }

    decline() {
        atom.config.set('core.telemetryConsent', 'no');
        atom.workspace.closeActivePaneItemOrEmptyPaneOrWindow();
    }

    openMetricsPackage() {
        atom.workspace.open('atom://config/packages/metrics');
    }

    getTitle() {
        return 'Telemetry Consent';
    }

    async destroy() {
        await etch.destroy(this);
    }
}