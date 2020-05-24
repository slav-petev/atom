/** @babel */
/** @jsx etch.dom **/

import etch from 'etch';

export default class WelcomeView {
    constructor(props) {
        this.props = props;
        etch.initialize(this);

        this.element.addEventListener('click', event => {
            const link = event.target.closest('a');
            if (link && link.dataset.event) {
                this.props.reporterProxy.sendEvent(
                    `clicked-welcome-${link.dataset.event}-link`
                );
            }
        });
    }

    didChangeShowOnStartup() {
        atom.config.set('welcome.showOnStartup', this.checked);
    }

    update() {}

    serialize() {
        return {
            deserializer: 'WelcomeView',
            uri: this.props.uri
        };
    }

    render() {

    }

    getURI() {
        return this.props.uri;
    }

    getTitle() {
        return 'Welcome';
    }

    isEqual(other) {
        return other instanceof WelcomeView;
    }
}