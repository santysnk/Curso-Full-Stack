interface Medicion {
    title: string;
    corriente: { r: number; s: number; t: number; voltage: string };
    tension: { rs: number; st: number; tr: number };
    eventos: number;
}

const mediciones: { [key: string]: Medicion } = {
    terna3: {
        title: "TERNA 3",
        corriente: { r: 79.4, s: 77.8, t: 71.6, voltage: "33kV" },
        tension: { rs: 34.2, st: 34.0, tr: 34.0 },
        eventos: 0
    },
    terna4: {
        title: "TERNA 4",
        corriente: { r: 80.0, s: 78.0, t: 72.0, voltage: "33kV" },
        tension: { rs: 34.1, st: 34.1, tr: 34.1 },
        eventos: 0
    },
    trafo1: {
        title: "TRAFO 1",
        corriente: { r: 53.75, s: 51.75, t: 54.15, voltage: "13.2kV" },
        tension: { rs: 13.2, st: 13.2, tr: 13.2 },
        eventos: 0
    },
    trafo2: {
        title: "TRAFO 2",
        corriente: { r: 10.4, s: 99.25, t: 103.75, voltage: "13.2kV" },
        tension: { rs: 13.2, st: 13.2, tr: 13.2 },
        eventos: 10
    },
    trafo3: {
        title: "TRAFO 3",
        corriente: { r: 0, s: 0, t: 0, voltage: "13.2kV" },
        tension: { rs: 0, st: 0, tr: 0 },
        eventos: 0
    },
    alimentador1: {
        title: "ALIMENTADOR 1",
        corriente: { r: 53.75, s: 51.75, t: 54.15, voltage: "13kV" },
        tension: { rs: 13.0, st: 13.0, tr: 13.0 },
        eventos: 0
    },
    alimentador2: {
        title: "ALIMENTADOR 2",
        corriente: { r: 0, s: 0, t: 0, voltage: "13kV" },
        tension: { rs: 0, st: 0, tr: 0 },
        eventos: 0
    },
    alimentador3: {
        title: "ALIMENTADOR 3",
        corriente: { r: 0, s: 0, t: 0, voltage: "13kV" },
        tension: { rs: 0, st: 0, tr: 0 },
        eventos: 0
    },
    alimentador4: {
        title: "ALIMENTADOR 4",
        corriente: { r: 0, s: 0, t: 0, voltage: "13kV" },
        tension: { rs: 0, st: 0, tr: 0 },
        eventos: 0
    },
    alimentador8: {
        title: "ALIMENTADOR 8",
        corriente: { r: 0, s: 0, t: 0, voltage: "13kV" },
        tension: { rs: 0, st: 0, tr: 0 },
        eventos: 0
    }
};

function mostrarMediciones() {
    for (const key in mediciones) {
        const panel = document.getElementById(key);
        if (panel) {
            const medicion = mediciones[key];
            panel.innerHTML = `
                <div class="title">${medicion.title}</div>
                <div class="data">
                    <label>Corriente (Amp) ${medicion.corriente.voltage}</label>
                    <div class="values">
                        <span>R: ${medicion.corriente.r}</span>
                        <span>S: ${medicion.corriente.s}</span>
                        <span>T: ${medicion.corriente.t}</span>
                    </div>
                </div>
                <div class="data">
                    <label>Tensión entre fases (kV)</label>
                    <div class="values">
                        <span>R-S: ${medicion.tension.rs}</span>
                        <span>S-T: ${medicion.tension.st}</span>
                        <span>T-R: ${medicion.tension.tr}</span>
                    </div>
                </div>
                <div class="events">EVENTOS (${medicion.eventos})</div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', mostrarMediciones);