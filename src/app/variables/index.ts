import { IMatch } from '../types'
import { april } from './april'
import { february } from './february'
import { january } from './january'
import { march } from './march'
import { may } from './may'

export const matches: IMatch[] = [...january, ...february, ...march, ...april, ...may]
