export const GERMANY_CLUBS = [
    'Augsburg',
    'Bayer',
    'BayernMunchen',
    'BorussiaDortmund',
    'BorussiaMonchengladbach',
    'Eintracht',
    'Freiburg',
    'Hamburger',
    'Heidenheim',
    'Hoffenheim',
    'Koeln',
    'Mainz',
    'RBLeipzig',
    'StPauli',
    'Stuttgart',
    'UnionBerlin',
    'Werder',
    'Wolfsburg',
] as const

export type GermanClubs = (typeof GERMANY_CLUBS)[number]

export type GermanTournaments = 'Bundesliga' | 'Germany Cup' | 'Germany Super Cup'
