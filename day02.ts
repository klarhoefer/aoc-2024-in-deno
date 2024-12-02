
function *conv(puzzle: string) {
    const lines = puzzle.split(/\r?\n/)
    for (const line of lines) {
        const nums = line.split(/\s+/).map(s => parseInt(s))
        yield nums
    }
}

function isSafe(row: number[]): boolean {
    const diffs = []
    for (let i = 1; i < row.length; i++) {
        const d = row[i] - row[i-1]
        diffs.push(d)
    }

    if (diffs.map(n => Math.abs(n)).some(n => n == 0 || n > 3)) {
        return false
    }

    const sig = diffs.map(Math.sign)
    return sig.every(n => n == sig[0])
}

export function solve1(puzzle: string): string {
    let count = 0
    for (const row of conv(puzzle)) {
        if (isSafe(row)) {
            count++
        }
    }
    return `${count} safe codes`
}

export function solve2(puzzle: string): string {
    let count = 0
    for (const row of conv(puzzle)) {
        if (isSafe(row)) {
            count++
        } else {
            for (let i = 0; i < row.length; i++) {
                const r = [...row.slice(0, i), ...row.slice(i+1)]
                if (isSafe(r)) {
                    count++
                    break
                }
            }
        }
    }
    return `${count} safe codes`
}
