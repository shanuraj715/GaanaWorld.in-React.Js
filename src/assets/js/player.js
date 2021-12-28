const player = {
    secToMinSec: sec => ({
        min: ("0" + parseInt(sec / 60)).slice(-2),
        sec: ("0" + (sec % 60)).slice(-2)
    })
}

export default player