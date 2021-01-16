
exports.min = function min (args) {
  if(args.length != 0 && Math.min(...args)){
        return Math.min(...args)
    }
    else {
        return 0
    }
}

exports.max = function max (args) {
  if(args.length != 0 && Math.max(...args)){
        return Math.max(...args)
    }
    else {
        return 0
    }
}

exports.avg = function avg (args) {
  if(args.length != 0 && args.reduce((accum, number) => accum + number,0) / args.length){
        return args.reduce((accum, number) => accum + number,0) / args.length
    }
    else {
        return 0
    }
}
