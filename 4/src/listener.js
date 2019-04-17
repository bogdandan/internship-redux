const WebSocket = require('ws');

class ServerListener {
    constructor(actions) {
        const ws = new WebSocket('ws://localhost:3000');
        ws.onopen = this.onopen.bind(this);
        ws.onclose = this.onclose.bind(this);
        ws.onerror = this.onerror.bind(this);
        ws.onmessage = this.onmessage.bind(this);
        this.actions = actions;
    }

    onopen() {
        this.actions.onOpen();
    };

    onclose() {
        this.actions.onClose();
    };

    onerror(e) {
        this.actions.onError(e);
    };

    onmessage({data}) {
        console.log(' onmessage ', data);
        this.actions.onMessage(JSON.parse(data));
    };
}

module.exports = ServerListener;
