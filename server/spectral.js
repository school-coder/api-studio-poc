const fs =  require("node:fs");
const { Spectral, Ruleset} = require('@stoplight/spectral-core');
const {truthy} = require("@stoplight/spectral-functions");
const path = require("node:path");
const { bundleAndLoadRuleset } = require ("@stoplight/spectral-ruleset-bundler/with-loader");
const app = new Spectral();
const spectralRuntime = require("@stoplight/spectral-runtime");
const { fetch } = spectralRuntime;


const rulesetFilepath = path.join(__dirname, ".spectral.yaml");
get().then((ruleset) => app.setRuleset(ruleset));

/*app.setRuleset({
    rules: {
        "no-empty-description": {
            given: "$.description",
            message: "Description must not be empty",
            then: {
                function: truthy,
            },
        },
    }
});*/
// create function to validate the request using spectral
const validateRequest = (req, res, next) => {
    console.log('request body: ', req.body);
    const content = req.body;
     app.run(content).then((results) => {
        console.log(results);
        if(results.length > 0) {
            res.status(400).send(results);
        } else {
            next();
        }
    });


}

async function get() {
    return await bundleAndLoadRuleset(rulesetFilepath, { fs, fetch })
}

module.exports = validateRequest;
