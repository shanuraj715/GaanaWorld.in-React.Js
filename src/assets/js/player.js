const player = {
    secToMinSec: sec => {
        if (isNaN(sec)) {
            return {
                min: "00",
                sec: "00"
            }
        }
        sec = parseInt(sec)
        return {
            min: ("0" + parseInt(sec / 60)).slice(-2),
            sec: ("0" + (sec % 60)).slice(-2)
        }
    }
}

export default player