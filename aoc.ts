

// console.log(Deno.args)

// import { solve1 } from "./day01.ts";



if (Deno.args.length == 1) {
    try {
        const day = parseInt(Deno.args[0]).toLocaleString('de-DE', { minimumIntegerDigits: 2 })
        const { solve1, solve2 } = await import(`./day${day}.ts`)
        const input = await Deno.readTextFile(`./input${day}.txt`)
        console.log("Part 1:", solve1(input))
        console.log("Part 2:", solve2(input))
    } catch (x) {
        console.log(x)
    }
} else {
    console.log("Usage: deno --allow-read aoc.ts <day>")
}
