import { TeamName } from '../types'
import { ENGLISH_CLUBS } from '../types/england'
import { EUROPE_CLUBS } from '../types/europe'
import { FRANCE_CLUBS } from '../types/france'
import { GERMANY_CLUBS } from '../types/germany'
import { ITALY_CLUBS } from '../types/italy'
import { SPAIN_CLUBS } from '../types/spain'

const CLUBS_BY_COUNTRY = {
    europe: EUROPE_CLUBS,
    england: ENGLISH_CLUBS,
    spain: SPAIN_CLUBS,
    italy: ITALY_CLUBS,
    germany: GERMANY_CLUBS,
    france: FRANCE_CLUBS,
} as const

type Country = keyof typeof CLUBS_BY_COUNTRY

export const teamCountry = (team: TeamName): Country | null => {
    for (const country in CLUBS_BY_COUNTRY) {
        if (CLUBS_BY_COUNTRY[country as Country].includes(team as never)) {
            return country as Country
        }
    }
    return null
}
