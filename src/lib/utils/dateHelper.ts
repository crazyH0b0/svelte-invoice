import {isBefore} from 'date-fns'

export const formatDate = (myDate: string): string => {
    const [year, month,date] = myDate.split('-')
    return `${month}/${date}/${year}`
}

export const isLate = (myDate: string): boolean =>{
  const [year, month,date] = myDate.split('-')
  const dueDate = new Date(parseInt(year), parseInt(month),parseInt( date))
  const today = new Date()
  return isBefore(dueDate, today)
}