const formatMessage = require('format-message');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
// const Cast = require('../../util/cast');


/**
 * Class 
 * @constructor
 */
class JoeUtils {
    constructor(runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo() {
        return {
            id: 'joeu',
            name: 'Joe Utils',
            color1: "#ffa200",
            color2: "#b87400",
            blocks: [
                {
                    opcode: 'joe',
                    blockType: BlockType.REPORTER,
                    text: 'joe'
                }
            ]
        };
    }

    joe () {
        return 'joe';
    }
}
module.exports = JoeUtils;
