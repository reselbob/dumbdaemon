const CronJob = require('cron').CronJob;
const stooge = process.env.DUMBDAEMON_STOOGE || 'UNKNOWN';
const emissionInterval = process.env.DUMBDAEMON_EMISSION_INTERVAL;
const interval = emissionInterval || '* * * * * *';

const job = new CronJob(interval, async function () {
    const obj ={stooge, emitTime: new Date()};
    console.log(obj);
}, null, true, 'America/Los_Angeles');
job.start();