export const SPAIN_CLUBS = [
    'Alaves',
    'AtleticBilbao',
    'AtleticoMadrid',
    'Barcelona',
    'Celta',
    'Elche',
    'Espanol',
    'Getafe',
    'Girona',
    'Levante',
    'Malorka',
    'Osasuna',
    'RayoVallecano',
    'RealBetis',
    'RealCocedad',
    'RealMadrid',
    'RealOviedo',
    'Sevilla',
    'Valencia',
    'Villereal',
] as const

export type SpanishClubs = (typeof SPAIN_CLUBS)[number]

export type SpanishTournaments = 'LaLiga' | 'Copa Del Rey' | 'Super Copa de Espana'
