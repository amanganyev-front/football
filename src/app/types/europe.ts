export const EUROPE_CLUBS = [
    'Ajax',
    'Benfica',
    'BodoGlimt',
    'Brugge',
    'Copenhagen',
    'Galatasaray',
    'Kairat',
    'Olympiacos',
    'PSV',
    'Qarabag',
    'Sporting',
] as const

export type EuropeanClubs = (typeof EUROPE_CLUBS)[number]
