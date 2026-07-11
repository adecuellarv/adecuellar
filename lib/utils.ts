import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BASE_PATH = '/adecuellar'

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`
}
