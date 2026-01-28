import { EuropeanClubs } from './europe'
import { EnglishClubs, EnglishTournaments } from './england'
import { ItalianClubs, ItalianTournaments } from './italy'
import { SpanishClubs, SpanishTournaments } from './spain'
import { GermanClubs, GermanTournaments } from './germany'
import { FrenchClubs, FrenchTournaments } from './france'

type UEFATournaments = 'UCL' | 'Europe League' | 'Conference League' | 'UEFA Super Cup'

export type TeamName = EuropeanClubs | EnglishClubs | SpanishClubs | ItalianClubs | GermanClubs | FrenchClubs

export type TournamentName =
    | UEFATournaments
    | EnglishTournaments
    | SpanishTournaments
    | ItalianTournaments
    | GermanTournaments
    | FrenchTournaments

export interface IMatch {
    date: string
    time: string
    first: TeamName
    second: TeamName
    tournament: TournamentName
    finished?: boolean
}

export interface MatchesByDate {
    date: string
    matches: IMatch[]
}
