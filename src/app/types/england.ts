export const ENGLISH_CLUBS = [
    'Arsenal',
    'AstonVilla',
    'Bournemouth',
    'Brentford',
    'Brighton',
    'Burnley',
    'Chelsea',
    'CrystalPalace',
    'Everton',
    'Fulham',
    'LeedsUnited',
    'Liverpool',
    'ManchesterCity',
    'ManchesterUnited',
    'NewcastleUnited',
    'NottinghamForest',
    'Sunderland',
    'Tottenham',
    'WestHamUnited',
    'Wolverhampton',
] as const

export type EnglishClubs = (typeof ENGLISH_CLUBS)[number]

export type EnglishTournaments = 'EPL' | 'England Cup' | 'England Cup League' | 'Community Shield'
