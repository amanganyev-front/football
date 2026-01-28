import { IMatch, MatchesByDate } from '../types'
import { april } from './april'
import { february } from './february'
import { january } from './january'
import { march } from './march'
import { may } from './may'

const matches: IMatch[] = [...january, ...february, ...march, ...april, ...may]

const isMatchFinished = (date: string, time: string): boolean => {
    const now = new Date()

    const [day, month] = date.split('.').map(Number)
    const [hour, minute] = time.split(':').map(Number)

    const matchStart = new Date(now.getFullYear(), month - 1, day, hour, minute)

    const TWO_HOURS = 2 * 60 * 60 * 1000

    return now.getTime() - matchStart.getTime() >= TWO_HOURS
}

export const groupAndSortMatches = (matches: IMatch[]): MatchesByDate[] => {
    const map: Record<string, IMatch[]> = {}

    for (const match of matches) {
        const finished = isMatchFinished(match.date, match.time)

        const matchWithStatus: IMatch = {
            ...match,
            finished,
        }

        ;(map[match.date] ??= []).push(matchWithStatus)
    }

    return Object.entries(map)
        .sort(([a], [b]) => {
            const [da, ma] = a.split('.').map(Number)
            const [db, mb] = b.split('.').map(Number)
            return ma - mb || da - db
        })
        .map(([date, matches]) => ({
            date,
            matches: matches.sort((a, b) => {
                const [ha, ma] = a.time.split(':').map(Number)
                const [hb, mb] = b.time.split(':').map(Number)
                return ha - hb || ma - mb
            }),
        }))
}

export const matchesByDate = groupAndSortMatches(matches)
