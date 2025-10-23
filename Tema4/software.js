class Software{
    run() {
        console.log(`running`);
    }
}

class Plugin{
    #feature;
    constructor(feature){
        this.#feature = feature;
    }
    get feature(){
        return this.#feature;
    }
}

class Browser extends Software{
    #program;
    #plugins;
    constructor(p, plg){
        super();
        this.#program = p;
        this.#plugins = [];
    }
    addPlugin(feature){
        this.#plugins.push(new Plugin(feature));
    }
    installPlugin(feature){
        for(const p of this.#plugins)
            if(p.feature === feature)
            {    
                console.log(`Plugin ${feature} installed!`);
                return;
            }
        console.log("Error: Add feature first!")
    }
    showPlugins(){
        this.#plugins.forEach(p => console.log(p.feature));
    }
}

const s0 = new Software();
s0.run();

const b0 = new Browser("Chrome");
b0.addPlugin("E-Commerce");
b0.addPlugin("Website Builder");
b0.installPlugin("E-Commerce");
b0.installPlugin("Anti-Spam");
b0.showPlugins();