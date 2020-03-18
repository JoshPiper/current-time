const core = require("@actions/core")
const moment = require('moment')

function action(){
    try {
        let time
        let inTime = core.getInput('time', {required: false})
        if (inTime){
            time = new moment()
        } else {
            time = new moment(inTime)
        }

        let [year, month, day, hour, minute, second, milisecond] = time.toArray()
        core.setOutput("year", year)
        core.setOutput("month", month)
        core.setOutput("day", day)
        core.setOutput("hour", hour)
        core.setOutput("minute", minute)
        core.setOutput("second", second)
        core.setOutput("milisecond", milisecond)
    } catch (err) {
        core.setFailed(err.message)
    }
}

module.exports = action
