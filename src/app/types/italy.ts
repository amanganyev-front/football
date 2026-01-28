export const ITALY_CLUBS = [
    'Atalanta',
    'Bologna',
    'Cagliari',
    'Como',
    'Cremonese',
    'Fiorentina',
    'Genoa',
    'Inter',
    'Juventus',
    'Lazio',
    'Lecce',
    'Milan',
    'Napoli',
    'Parma',
    'Pisa',
    'Roma',
    'Sassuolo',
    'Torino',
    'Udinese',
    'Verona',
] as const

export type ItalianClubs = (typeof ITALY_CLUBS)[number]

export type ItalianTournaments = 'Seria A' | 'Copa De Italia' | 'Super Coppa italia'
