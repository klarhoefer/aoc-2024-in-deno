
function convertInput(puzzle: string): [number[], number[]] {
    const lines = puzzle.split(/\r?\n/)
    const lcol = []
    const rcol = []
    for (const line of lines) {
        const [l, r] = line.split('   ').map(s => parseInt(s.trim()))
        lcol.push(l)
        rcol.push(r)
    }
    return [lcol, rcol]
}

export function solve1(puzzle: string): string {
    const [lcol, rcol] = convertInput(puzzle)
    const l = lcol.sort()
    const r = rcol.sort()

    let dist = 0
    for (const i in l) {
        dist += Math.abs(l[i] - r[i])
    }

    return `Total distance: ${dist}`
}

export function solve2(puzzle: string): string {
    const [lcol, rcol] = convertInput(puzzle)

    let res = 0

    for (const l of lcol) {
        let count = 0
        for (const r of rcol) {
            if (r == l) count++
        }
        res += count * l
    }

    return `Result: ${res}`
}
