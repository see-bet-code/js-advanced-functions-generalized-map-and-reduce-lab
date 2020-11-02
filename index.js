// Add your functions here
function map(src, f) {
    const res = []
    for (const s of src) {
        res.push(f(s))
    }
    return res
}

function reduce(src, f, startVal) {
    let r = (startVal) ? startVal : undefined
    src.forEach((s, i) => {
        if (r === undefined && i === 0) {
            r = s
        } else {
            r = f(s, r)
        } 
    })
    return r
}