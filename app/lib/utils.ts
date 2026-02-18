import { PersonCardDef } from "./definition";

export function findAllServices(peopleList: PersonCardDef[]): string[] {
  const list: string[] = []
  peopleList.map(person => {
    person.services.map(service => {
      list.push(service)
    })
  })
  return [...new Set(list)]
}
export function findAllStates(peopleList: PersonCardDef[]): string[] {
  const list: string[] = peopleList.map(person => {
    return person.state
  })
  return [...new Set(list)]
}