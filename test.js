const VJoi = require('./vjoi');
const Joi = require('joi');
const Hash = require('object-hash');


var used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

console.time("vjoifirst");
console.time("vjoibegin");

Joi.number -> F! -> F*

number() -> rV -> Object* -> getter ->
.optional -> F! -> F*

P*.optional() ->  rv ->




Joi.number() -> compile
Joi.number().required() ->

VJoi.assert({
    roomId: 6,
    accountId: 'osman',
}, {
    roomId: VJoi.number().required().min(4),
    accountId: VJoi.alternatives().try(VJoi.string().valid('kamil', 'osman'), VJoi.number()).required(),
    properties: VJoi.object({
        messages: VJoi.array().items({
            slug: VJoi.string().required(),
            title: VJoi.string().optional().default('unknown theme')
        }),
        internal: VJoi.forbidden()
    }).unknown(true).optional().default({})
});
console.timeEnd("vjoifirst");



console.log('SECOND ATTEMPT');

VJoi.assert({
    roomId: 6,
    accountId: 'kamil',
}, {
    roomId: VJoi.number().required().min(4),
    accountId: VJoi.alternatives().try(VJoi.string().valid('kamil', 'osman'), VJoi.number()).required(),
    properties: VJoi.object({
        messages: VJoi.array().items({
            slug: VJoi.string().required(),
            title: VJoi.string().optional().default('unknown theme')
        }),
        internal: VJoi.forbidden()
    }).unknown(true).optional().default({})
});


console.log('THIRD ATTEMPT');


VJoi.assert({
    roomId: 5,
    accountId: 'kamil',
    properties: {messages: []}
}, {
    roomId: VJoi.number().required().min(4),
    accountId: VJoi.alternatives().try(VJoi.string().valid('kamil', 'osman'), VJoi.number()).required(),
    properties: VJoi.object({
        messages: VJoi.array().items({
            slug: VJoi.string().required(),
            title: VJoi.string().optional().default('unknown theme')
        }),
        internal: VJoi.forbidden()
    }).unknown(true).optional().default({})
});


console.log('FOURTH ATTEMPT');


VJoi.assert({
    roomId: 5,
    accountId: 'kamil',
    properties: {messages: [{
        slug: 'anam'
    }]}
}, {
    roomId: VJoi.number().required().min(3),
    accountId: VJoi.alternatives().try(VJoi.string().valid('kamil', 'osman'), VJoi.number()).required(),
    properties: VJoi.object({
        messages: VJoi.array().items({
            slug: VJoi.string().required(),
            title: VJoi.string().optional().default('unknown theme')
        }),
        internal: VJoi.forbidden()
    }).unknown(true).optional().default({})
});


var used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

console.timeEnd("vjoibegin");
console.time("joibegin");
console.time("joifirst");



Joi.assert({
    roomId: 6,
    accountId: 'osman',
}, {
    roomId: Joi.number().required().min(4),
    accountId: Joi.alternatives().try(Joi.string().valid('kamil', 'osman'), Joi.number()).required(),
    properties: Joi.object({
        messages: Joi.array().items({
            slug: Joi.string().required(),
            title: Joi.string().optional().default('unknown theme')
        }),
        internal: Joi.forbidden()
    }).unknown(true).optional().default({})
});
console.timeEnd("joifirst");



console.log('SECOND ATTEMPT');

Joi.assert({
    roomId: 6,
    accountId: 'kamil',
}, {
    roomId: Joi.number().required().min(4),
    accountId: Joi.alternatives().try(Joi.string().valid('kamil', 'osman'), Joi.number()).required(),
    properties: Joi.object({
        messages: Joi.array().items({
            slug: Joi.string().required(),
            title: Joi.string().optional().default('unknown theme')
        }),
        internal: Joi.forbidden()
    }).unknown(true).optional().default({})
});


console.log('THIRD ATTEMPT');


Joi.assert({
    roomId: 5,
    accountId: 'kamil',
    properties: {messages: []}
}, {
    roomId: Joi.number().required().min(4),
    accountId: Joi.alternatives().try(Joi.string().valid('kamil', 'osman'), Joi.number()).required(),
    properties: Joi.object({
        messages: Joi.array().items({
            slug: Joi.string().required(),
            title: Joi.string().optional().default('unknown theme')
        }),
        internal: Joi.forbidden()
    }).unknown(true).optional().default({})
});


console.log('FOURTH ATTEMPT');


Joi.assert({
    roomId: 5,
    accountId: 'kamil',
    properties: {messages: [{
        slug: 'anam'
    }]}
}, {
    roomId: Joi.number().required().min(3),
    accountId: Joi.alternatives().try(Joi.string().valid('kamil', 'osman'), Joi.number()).required(),
    properties: Joi.object({
        messages: Joi.array().items({
            slug: Joi.string().required(),
            title: Joi.string().optional().default('unknown theme')
        }),
        internal: Joi.forbidden()
    }).unknown(true).optional().default({})
});


var used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

console.timeEnd("joibegin");




console.log(Hash(Joi.number().optional().default(4)));

console.log(Hash(VJoi.number().optional().default(4)));
console.log('SECOND ATTEMPT');
console.log(Hash(VJoi.number().optional().default(4)));
console.log(Hash(VJoi.number().optional().default(4)));
console.log(Hash(VJoi.number().optional().default(4)));
console.log(Hash(VJoi.number().optional().default(4)));
console.log(Hash(VJoi.number().optional().default(4)));

// console.log(Hash(VJoi.number().optional().default(4)));

// console.log('begin access 3 number + optional + default');
var conf3 = VJoi.number().optional().default(3);

// console.log('begin access 4 number + optional + default EXACT SAME');
// var conf4 = VJoi.string().optional().default(342);

console.log('begin access 5 number + optional + default LAST DIFFERENT');
var conf5 = VJoi.number().optional().default(5);


var confX = VJoi.object({
    roomId: VJoi.number().required().min(4),
    accountId: VJoi.alternatives().try(VJoi.string().valid('kamil', 'osman'), VJoi.number()).required(),
    properties: VJoi.object({
        messages: VJoi.array().items({
            slug: VJoi.string().required(),
            title: VJoi.string().optional().default('unknown theme')
        }),
        internal: VJoi.forbidden()
    }).unknown(true).optional().default({})
}).required();


console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);


// console.log(Joi.number().optional().default(3));

// VJoi.enableLogs(false);
console.log('VALIDATION TIME');

console.log(VJoi.attempt(undefined, conf3));
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.attempt(undefined, conf3));
console.log(VJoi.attempt(undefined, conf5));


console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);
console.log(VJoi.validate({
    roomId: 6,
    accountId: 'osman',
    properties: {
        messages: [{
            slug: 'kkaraman', title: 'ahmedim'
        }],
    }
}, confX).error);

// const used = process.memoryUsage();
// for (let key in used) {
//   console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
// }

// console.log(VJoi.attempt({}, conf4));

// console.log(VJoi.db);
//
// try {
//     const value = VJoi.validation(2, conf1);

//     console.log('Validation OK', value);
// } catch (err) {
//     console.log(err);
// }


// const Xes = {
//     number: () => {console.log('number call'); return Xes; },
//     required: () => {console.log('required call'); return Xes; },
// }

// console.log(`


// `);

// console.log('begin\n');
// Xes.number().required().number();


// var Xez = new Proxy(Xes, {
//     get: (obj, prop) => {
//         console.log('Observing', this, obj, prop);
//         return obj[prop];
//     }
// });


// console.log('begin2\n');
// Xez.number().required().number();
