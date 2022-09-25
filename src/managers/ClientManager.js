const Utils = require("../utils/utils");
const Base = require("../Base")
const Lines = require("./LinesManager");
const Journeys = require("./JourneysManager");
const Disruptions = require("./DisruptionsManager");
const Places = require("./PlacesManager");
const StructuresManager = require("../structures/StructuresManager");

module.exports = class Client extends Base {
    constructor() {
        super()
    }


    /**
     * Get the utils functions
     * @returns {Utils}
     */
    get utils() {
        return new Utils(this);
    }

    /**
     * Get all the structures' manager available
     * @returns {StructuresManager}
     */
    get structures() {
        return new StructuresManager();
    }


    /**
     * All of the {@link Lines} objects that have been cached at any point
     * @type {Lines}
     * @returns {Lines}
     */
    get lines() {
        return new Lines(this);
    }

    /**
     * All of the {@link Journeys} objects that have been cached at any point
     * @type {Journeys}
     * @returns {Journeys}
     */
    get journeys() {
        return new Journeys(this);
    }

    /**
     * All of the {@link Dirsuptions} objects at custom date
     * @type {Disruptions}
     * @returns {Disruptions}
     */
    get disruptions() {
        return new Disruptions(this);
    }

    /**
     * @type {Places}
     * @returns {Places}
     */
    get places() {
        return new Places(this);
    }

    login(token = this.token) {
        // Token must be SNCF_TOKEN env variable or passed as parameter
        return new Promise((resolve, reject) => {
            if (!process.env.SNCF_TOKEN) return reject(new Error('Token must be SNCF_TOKEN env variable or passed as parameter'));

            // Check and set the token
            if (!token) reject(new Error('TOKEN_INVALID'));
            else if(this.token !== token) this.setToken(token);

            // Establish the connection
            this.utils.request('', 'GET').then(r => {
                this.connected = true;
                this.readyDate = r.regions[0].last_load_at;
                this.connectionType = r.regions[0].name;
                this.id = r.regions[0].id;
                this.shape = r.regions[0].shape;
                this.timezone = r.context.timezone;
                resolve(this);
            }).catch(e =>{reject(e)})
        })
    }

    logout() {
        this.connected = false;
        this.readyDate = null;
        this.connectionType = null;
        this.id = null;
        this.shape = null;
        this.timezone = null;
        this.places = null;
        return this;
    }
}