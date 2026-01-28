export const FRANCE_CLUBS = [
    'Angers',
    'Auxerre',
    'Brest',
    'Havre',
    'Lens',
    'Lille',
    'Lorient',
    'Lyon',
    'Marsel',
    'Metz',
    'Monaco',
    'Nant',
    'Nice',
    'Paris',
    'PSG',
    'Renn',
    'Strasbourg',
    'Tuluza',
] as const

export type FrenchClubs = (typeof FRANCE_CLUBS)[number]

export type FrenchTournaments = 'Ligue 1' | 'French Cup' | 'French Super Cup'
