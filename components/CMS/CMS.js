export default function MARKDOWN(e) {
    return (
        <>
            <Bold str={e.name} />
        </>
    )
}


const Bold = (e) => {
    let b = ""
    let arrb = []
    let count = 0

    let spl = e.str.split("*")

    for (let i = 0; i < e.str.length; i++) {
        if (e.str[i] == "*") {
            if (count == 1) {
                arrb.push(b)
                count = 0
                b = ""
                continue
            }
            count += 1
        }
        if (count == 1 && e.str[i] != "*") {
            b += e.str[i]
        }
    }
    console.log(arrb)
    console.log(spl)
    return (
        <>{spl.map((e, i) => {
            let b = arrb.filter((a, j) => e == a)
            console.log(b)
            return b.length > 0 ? <h1>{b}</h1> : e
        })}</>
    )
}