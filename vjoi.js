const _ = require('lodash');
const Joi = require('joi');
const Hash = require('object-hash');
const debug = require('debug')('vjoi');
const debugVerbose = require('debug')('vjoi:verbose');

const SchemaDB = {};

const VJoi = new Proxy(Joi, generateGetter({firstBorn: true, history: []}));


function generateGetter({firstBorn, history: history_}) {
    return {
        get: (obj, prop) => {
            debugVerbose('Preparing getter by', prop, history_);

            const original = obj[prop];

            if (prop == 'attempt' ||
                prop == 'validate' ||
                prop == 'assert' ||
                prop == 'extend' ||
                prop[0] == '_')
                return original;

            if (original instanceof Function) {
                return function(...args) {
                    const [...history] = history_;
                    history.push({prop, args});
                    const hash = Hash(history);
                    debugVerbose('History', history);

                    let joiResult = SchemaDB[hash] || original.apply(obj, args);

                    if (SchemaDB[hash]) {
                        debug('Cache HIT', _.map(history, ({prop}) => prop).join('->') + `(${args.slice(0)})`);
                    } else {
                        debug('Cache MISS', _.map(history, ({prop}) => prop).join('->') + `(${args.slice(0)})`);
                        SchemaDB[hash] = joiResult;
                    }

                    if (joiResult instanceof Object)
                        return new Proxy(joiResult, generateGetter({firstBorn: false, history}));

                    return joiResult;
                };
            }

            return original;
        }
    }
};


module.exports = VJoi;


